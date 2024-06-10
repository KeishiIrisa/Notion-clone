import { useState, useEffect } from "react";

export const useScrollTop = (threshold = 10) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        // 副作用：スクロールイベントの設定
        window.addEventListener("scroll", handleScroll);

        // クリーンアップ関数：スクロールイベントの削除
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]); // thresholdは依存配列、thresholdが変更されたときにuseEffect内の副作用が再実行されるべきであることをReactに伝える。

    return scrolled;
}
