import "./clips.scss";
import React, { useEffect, useState } from "react";

export default function Clips() {
    //TODO: pull data from sql table containing the names of all the people in the clips
    const peopleInClips = [
        {name: "Kyle", gamertag: "Creo", aliases: ["creo"]},
        {name: "Katie", gamertag: "Cheeseburgerbaby", aliases: ["ktizzle", "kt"]},
        {name: "Brandon", gamertag: "", aliases: ["b-randon"]},
        {name: "Barb", gamertag: "Landelyon", aliases: ["Landy", "BMO", "Landelyon", "Barbara Gaming"]},
        {name: "Bella", gamertag: "IsabelleLuna", aliases: ["Bellaur"]},
        {name: "Nick", gamertag: "specz0r", aliases: [""]},
        {name: "Cam", gamertag: "Cam", aliases: ["Camron", "Cameron"]},
        {name: "Alex", gamertag: "Amicus", aliases: [""]},
        {name: "Adam", gamertag: "Atom", aliases: ["VolatileNeutrino"]},
    ];

    //data we would pull from the youtube API
    const testClipData = [
        {clipName: "4K From Outta Nowhere", gameName: "Valorant", nameTags:["Kyle", "Katie", "Bella", "Cam", "Adam", "Alex"], idx:1},
        {clipName: "Football playing king in space", gameName: "Overwatch", nameTags:["Cam", "Barb", "Bella", "Brandon", "Adam", "Alex"], idx:2},
        {clipName: "Start digging in yo butt twin", gameName: "Valorant", nameTags:["Kyle", "Katie", "Nick", "Cam", "Adam", "Alex"], idx:3},
        {clipName: "Monkey madness", gameName: "Halo", nameTags:["Nick", "Katie", "Bella", "Cam", "Adam", "Alex"], idx:4}
    ];

    //make the de-duped list of game names from the clips for tag displaying purposes
    const gameTags = Array.from(new Set(testClipData.map(clip => clip.gameName)));

    const [currentTags, setCurrentTags] = useState([]);
    const [filteredClips, setFilteredClips] = useState([...testClipData]);

    useEffect(() => {
        setFilteredClips([...testClipData].filter(clip => matchesAllTags(clip)));
    }
    ,[currentTags]);

    function addOrRemoveTag(tagName) {
        if (currentTags.includes(tagName)){
            //removing the tags
            setCurrentTags(currentTags.filter(tag => tag != tagName));
        } else {
            //adding the tags
            setCurrentTags([...currentTags, tagName]);
        }
    }

    function matchesAllTags(clip){
        let allMatch = true;
        currentTags.forEach(tag => {
            //if the tag we are looking at isn't in the clip's nameTags AND isn't the game name, we don't want it
            if (!clip.nameTags.includes(tag) && clip.gameName != tag)
                allMatch = false;
        });

        return allMatch;
    }

    return (
        <div className="clips" id="clips">
            <div id="clipSections">
                <div id="people">
                    <ul>
                        {peopleInClips.map((person) => 
                            (<li key={person.name}>
                                <button onClick={() => addOrRemoveTag(person.name)}>
                                    {person.name} ({person.gamertag != "" ? (person.gamertag) : ""})
                                </button>
                            </li>)
                        )}
                    </ul>
                </div>
                <div id="games">
                    <ul>
                        {gameTags.map((game) => 
                            (<li key={game}>
                                <button onClick={() => addOrRemoveTag(game)}>
                                    {game}
                                </button>
                            </li>)
                        )}
                    </ul>
                </div>
                <div id="tags">
                    Selected Tags:
                    <ul>
                        {currentTags.map(tag => <li key={tag}>{tag}</li>)}
                    </ul>
                </div>
                <div id="clipData">
                   Clips:
                    <ul>
                        {filteredClips.map(clip => <li key={clip.idx}>{clip.clipName}</li>)}
                    </ul>
                </div>
            </div>            
        </div>
    )
}
