// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`200010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050004000000000004000000000000000000000000000000000004000000000101010100000101010100000000000000000000000000000000010101010000000000000000000000000500000000000000000000000000000000000000000101010000000000000001010100000003000000000000000000000000000000000000000000040000000000000004000000000000000000000000000000000000000000010101000000000000010101000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000001010100000000010100000000000000000000000101000005040000000005000000000000000504000000000000000000000000000000010101000000010101000000000001010100000000000000000101010100000000000000000000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020202020202020202020202020202020202020202020202020202`, img`
................................
................................
................................
.........2222..2222.............
...2222.........................
........222.......222...........
................................
............222......222........
................................
................222....22.......
....22..........................
.......222...222.....222........
2222............................
..........22....................
................................
................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile4":return tile4;
            case "myTile1":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
