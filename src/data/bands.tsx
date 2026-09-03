import { Band } from "@/types/band"

export const Allbands: Band[] = [
    {
        id: 1,
        name: "Bodyslam",
        genre: "Rock",
        image: "/images/bands/19069_003.jpg",
        members: [
            { id: 101, name: "ตูน", role: "ร้องนำ", image:"/images/bands/toon-bodyslam.webp" },
            { id: 102, name: "ปิ๊ด", role: "เบส"  ,image:"/images/bands/pid-bodyslam.webp"},
            { id: 103, name: "ชัช", role: "กลอง",image:"/images/bands/sas-bodyslam.jpg" },
            { id: 104, name: "ยอด", role: " กีตาร์" ,image:"/images/bands/yod-bodyslam.webp"}
            
        ],
    },
    {
        id: 2,
        name: "Sillyfools",
        genre: "Rock",
        image: "/images/bands/OIP (4).webp",
        members: [
            { id: 201, name: "โต", role: "ร้องนำ" ,image:"/images/bands/to-silly.jpg"},
            { id: 202, name: "เต้ย", role: "คีย์บอร์ด",image:"/images/bands/t-silly.png" },
            { id: 203, name: "ต้น", role: "กีตาร์ลีด" ,image:"/images/bands/h-silly.png"},
            { id: 204, name: "หรั่ง", role: "เบส",image:"/images/bands/hh-silly.png" }
        ]
    },
    {
        id: 3,
        name: "CARABAO",
        genre: "Rock,Songs for life",
        image: "/images/bands/ab6761610000e5eba8aa814844949e1b9ca0578e.jpg",
        members: [
            { id: 301, name: "แอ๊ด", role: "ร้องนำ" ,image:"/images/bands/a-cara.jpg"},
            { id: 302, name: "เทียรี่", role: "ร้องนำ,กีตาร์" ,image:"/images/bands/tr-cara.jpg"},
            { id: 303, name: "เล็ก", role: "กีตาร์" ,image:"/images/bands/l-cara.webp"},
            { id: 304, name: "เขียว", role: "คีย์บอร์ด" ,image:"/images/bands/k-cara.jpg"}
        ]
    }]