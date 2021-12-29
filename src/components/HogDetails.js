import React from "react";

function HogDetails({ hog }) {
    return (
        <div>Details
            <div>Hog Speciality: {hog.speciality}</div>
            <div>{hog.greased ? "This hog's greased" : "This hog ain't greased"}</div>
            <div>Weight: {hog.weight}</div>
            <div>Highest medal achieved: {hog["highest medal achieved"]}</div>
        </div>
    )
}

export default HogDetails;