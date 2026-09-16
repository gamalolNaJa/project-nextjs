"use client";
import { Allbands } from "@/data/bands";
import Bandcard from "@/components/Bandscard";
import BandExplorer from "@/components/BandExplorer";

export default function Bandpage() {
  return (
    <main>
      <div className ="head" >วงดนตรีที่ชื่นชอบ</div>
      <div>
        <BandExplorer bands={Allbands} />
      </div>

      {/* <div className="cardband">
        {Allbands.map((band) => (
          <Bandcard key={band.id} band={band} />
        ))}
      </div> */}


    </main>
  );
}