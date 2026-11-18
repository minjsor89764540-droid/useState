export const StudentCard = ({ student }) => {
  return (
    <div className="bg-pink-400 flex justify-center itemst-center  flex-col text-pink-100 rounded-2xl p-9 justify-center items-center font-bold">
      <h1>{student.firstName}</h1>
      <p> Gender: {student.gender}</p>
      <p> Age: {student.age}</p>
      <div>
        <h1>hobbies</h1>
      </div>
    </div>
  );
};
