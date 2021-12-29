import React, { useState } from "react";
import HogTile from "./HogTile";

function HogContainer({ hogs }) {

    const [filterGreased, setFilterGreased] = useState(false)
    const [displayHogs, setDisplayHogs] = useState(hogs)
    const [sortName, setSortName] = useState(false)

    function handleFilter(e) {
        setFilterGreased(!filterGreased)

        if (e.target.checked) {
            const hogsFiltered = displayHogs.filter(hog => {
                return hog.greased === true
            })
            setDisplayHogs(hogsFiltered)
        } else {
            setDisplayHogs(hogs)
        }
    }

    function handleSort(e) {
        setSortName(!sortName)

        if (e.target.checked) {
            let sortedHogs = displayHogs.slice().sort((a, b) => {
                if (a.name < b.name) return -1
                if (a.name > b.name) return 1
                return 0
            })
            setDisplayHogs(sortedHogs)
        } else {
            setDisplayHogs(hogs)
        }
    }

    return (
        <div>
            <div>Only greased:
                <input onClick={handleFilter} type="checkbox" id="filter" />
            </div>
            <div> Sort by name:
                <input onClick={handleSort} type="checkbox" id="sort" />
            </div>
            {displayHogs.map(hog => <HogTile hog={hog} />)}
        </div>
    )
}

export default HogContainer;