var formatWord = function (str, count) {
    return str + " " + count
}

var group = function (strAry) {
    var result = [];
    strAry.forEach((word) => {
        let entry = result.find((e) => {
            // e.word === word   好像支持不了这个最新语法
            if (e.word === word) {
                return e
            }
        })
        if (entry) { entry.count++;
        } else {
            result.push({ word: word,  count: 1})
        }
    })
    return result
}

var format = function (groupedWords) {
   return groupedWords.map((w) => formatWord(w.word, w.count)).join("\r\n")
}

module.exports = function main(str) {

    if (str !== "") {
        var strAry = str.split(/\s+/);
        // if (str.length > 1) {  不够严谨 ，应该判断是否包含空格
        var groupedWords = group(strAry).sort((x, y) => y.count - x.count)
        return format(groupedWords)
    }
    return ""
}