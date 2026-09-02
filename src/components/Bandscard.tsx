import { Band } from "@/types/band";

type Bandcardprops = {
  band: Band;
};

export default function Bandcard({band}: Bandcardprops) {
  return (
    <div className="bandcard">
      <img src={band.image} alt={band.name} />
      <div className="nameband">{band.name}</div>
      <p>แนวเพลง: {band.genre}</p>
      <p>สมาชิกในวง: </p>
      <ul className="members">
        {band.members.map((member)=> (
          <li key={member.id}>· {member.name}
          <span>({member.role})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}