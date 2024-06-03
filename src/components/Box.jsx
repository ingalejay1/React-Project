/* eslint-disable react/prop-types */
export default function Box({ data, selectedMovie, setSelectedMovie, backgroundColor}) {
    function handleSelection() {
      if (selectedMovie.includes(data.category)) {
        // if this movie is already selected
        setSelectedMovie((prev) => prev.filter((item) => item !== data.category)); // then filter it out and remove from the selected movies array
      } else {
        // if this movie is not selected
        setSelectedMovie((prev) => [...prev, data.category]); // add it into the state
      }
    }
    return (
      <div
        style={{
          border: `6px solid ${
            selectedMovie.includes(data.category) ? "#72DB73" : "black"
          }`,
          padding: "10px",
          margin: "10px",
          width: "170px",
          height: "170px",
          display: "inline-block",
          backgroundColor: backgroundColor,
          borderRadius: "20px",
          color: "white",
          textAlign: "center",
          cursor: "pointer"
        }}
        onClick={handleSelection}
      >
        {data.category}
        <img 
        alt={data.category} 
        src={data.imageUrl} 
        style={{
          width: "100%",
          height: "70%",
          objectFit: "cover",
          borderRadius: "10px",
          marginTop: "22px"
        }} 
      />
      </div>
    );
  }