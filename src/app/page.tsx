import { Allbands } from "@/data/bands";
import Bandcard from "@/components/Bandscard";

export default function Bandpage() {
  return (
    <main>
      <div className ="head" >วงดนตรีที่ชื่นชอบ</div>

      <div className="cardband">
        {Allbands.map((band) => (
          <Bandcard key={band.id} band={band} />
        ))}
      </div>


    </main>
  );
}