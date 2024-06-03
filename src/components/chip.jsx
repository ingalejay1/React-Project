/* eslint-disable react/prop-types */
export default function Chip({ selectedMovie, setSelectedMovie }) {
    function removeSelection() {
      setSelectedMovie((prev) => prev.filter((item) => item !== selectedMovie)); // same thing from boxes
    }
    return (
      <span
        style={{
          // border: "1px solid white",
          padding: "8px",
          borderRadius: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#148A08",
          color: "white",
          width: "150px"
        }}
      >
        {selectedMovie}&nbsp; &nbsp;{" "}
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={removeSelection}
        >
          X
        </span>
      </span>
    );
  }