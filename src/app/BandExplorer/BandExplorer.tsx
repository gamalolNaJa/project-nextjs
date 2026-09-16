"use client";

import { useState, type ChangeEvent } from "react";
import { Band } from "@/types/band";
import Bandcard from "@/components/Bandscard";

type BandExplorerProps = {
    bands: Band[];
};

export default function BandExplorer({ bands: initialBands }: BandExplorerProps) {
    const [keyword, setKeyword] = useState("");
    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
    const [likesMap, setLikesMap] = useState<{ [key: number]: number }>(() =>
        initialBands.reduce((acc, band) => ({ ...acc, [band.id]: band.likes || 0 }), {})
    );

    function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
        setKeyword(event.target.value);
    }


    const searchText = keyword.trim().toLowerCase();

    const visibleBands = initialBands.filter(
        (band) =>
            band.name.toLowerCase().includes(searchText) ||
            band.genre.toLowerCase().includes(searchText)
    );


    function handleToggleFavorite(id: number) {
        setFavoriteIds((prevIds) =>
            prevIds.includes(id)
                ? prevIds.filter((favoriteId) => favoriteId !== id)
                : [...prevIds, id]
        );
    }
    function handleLike(id: number) {
        setLikesMap((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
    }

    return (
        <div>
            <input
                type="search"
                aria-label="ค้นหาชื่อวงดนตรี"
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="ค้นหาชื่อวงดนตรี"
            />
            <div className="favorite-count">
                วงที่ติดตามอยู่: <strong>{favoriteIds.length}</strong> วง
            </div>
            {visibleBands.length === 0 ? (
                <p>ไม่พบวงดนตรี</p>
            ) : (
                // <section>
                //     {visibleBands.map((band) => (
                //         <Bandcard key={band.id} band={band}
                //             isFavorite={favoriteIds.includes(band.id)}
                //             onToggleFavorite={handleToggleFavorite} />
                //     ))}
                // </section>
                <section className="cardband">
                    {visibleBands.map((band) => (
                        <Bandcard
                            key={band.id}
                            band={band}
                            isFavorite={favoriteIds.includes(band.id)}
                            onToggleFavorite={handleToggleFavorite}
                            likeCount={likesMap[band.id] || 0}
                            onLike={handleLike}
                        />
                    ))}
                </section>
            )}
        </div>
    );
} 