import strutils, sequtils

const guesses = readFile("testg.txt").split()[0].split(",")



var
    boardData: seq[seq[string]]


let boards = readFile("test.txt").strip().splitLines()


proc groupData(stuffs: seq[string], count: int): seq[seq[string]] =
    var count = count
    if count >= stuffs.len-1:

        return boardData
    else:
        let group = stuffs[count..<count+5]
        boardData.add(group)
    groupData(stuffs, count+6)

var halfSortedBoards = groupData(boards, 0)

        
for i in halfSortedBoards:
    for j in i:
        var it = j.split(" ")
        if it.find("7")>0:
            echo it
