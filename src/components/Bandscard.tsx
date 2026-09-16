import { Band } from "@/types/band";

type Bandcardprops = {
  band: Band;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  likeCount: number;         // 1. เพิ่ม Type สำหรับจำนวน Like
  onLike: (id: number) => void;

};

export default function Bandcard({ band, isFavorite,
  onToggleFavorite ,likeCount,
  onLike}: Bandcardprops) {

  return (
    <div className="bandcard">
      <img src={band.image} alt={band.name} />
      <div className="nameband">{band.name}</div>
      <p>แนวเพลง: {band.genre}</p>
      <p>สมาชิกในวง: </p>
      <ul className="members">
        {band.members.map((member) => (
          <li key={member.id} className="membersitem"><img className="image-member" src={member.image} alt={member.name} /><span> {member.name}</span>
            <span>({member.role})</span>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => onLike(band.id)}>
        👍 Like ({likeCount})
      </button>
      <button
        type="button"
        aria-pressed={isFavorite}
        onClick={() => onToggleFavorite(band.id)}
      >
        {isFavorite ? "อยู่ในรายการโปรด" : "เพิ่มเป็นรายการโปรด"}
      </button>
    </div>
  );
}