import Meeting from ".";

const Meetings = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {[1, 2, 3, 4].map((e) => (
        <Meeting key={e} main />
      ))}
    </div>
  );
};

export default Meetings;
