

function mapOpions(diffLvl) {
    const optiosArr = [
        {
            lvl: 1,
            selected: false, 
            msg: '1 - Very Easy'
        },
        {
            lvl: 2,
            selected: false, 
            msg: '2 - Easy'
        },
        {
            lvl: 3,
            selected: false, 
            msg: '3 - Medium (Standard 3x3)'
        },
        {
            lvl: 4,
            selected: false, 
            msg: '4 - Intermediate'
        },
        {
            lvl: 5,
            selected: false, 
            msg: '5 - Expert'
        },
        {
            lvl: 6,
            selected: false, 
            msg: '6 - Hardcore'
        }
    ];

    return optiosArr.map((obj) => {
        if (obj.lvl == diffLvl) {
            obj.selected = true;
        }

        return obj;
    });
} 

module.exports = {
    mapOpions
}