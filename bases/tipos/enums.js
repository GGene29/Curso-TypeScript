"use strict";
(() => {
    let level = 1;
    let LevelPlay;
    (function (LevelPlay) {
        LevelPlay[LevelPlay["min"] = 1] = "min";
        LevelPlay[LevelPlay["medium"] = 2] = "medium";
        LevelPlay[LevelPlay["max"] = 3] = "max";
    })(LevelPlay || (LevelPlay = {}));
    let porDfecto = LevelPlay.min;
    console.log(porDfecto);
})();
//# sourceMappingURL=enums.js.map