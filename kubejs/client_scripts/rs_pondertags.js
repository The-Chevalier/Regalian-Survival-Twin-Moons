// for 1.18 pls use: onEvent("ponder.tag")
onEvent("ponder.tag", (event) => {

    /**
     * "kubejs:getting_started" -> the tag name
     * "minecraft:paper"        -> the icon
     * "Getting Started"        -> the title
     * "This is a description"  -> the description
     * [...items]               -> default items
     */
    event.createTag("kubejs:getting_started", "easypaxellite:stone_paxel", "Getting Started", "The first steps to surviving on Vultor", [
        // some default items
        "kubejs:broken_fabricator",
        "easypaxellite:stone_paxel",
    ]);

    event.createTag("kubejs:inhabitants_of_vultor", "minecraft:grass_block", "Inhabitants Of Vultor", "The many creatures that inhabit these alien lands", [
        // some default items
        "kubejs:robotic_types",
        "kubejs:fraktan_types",
        "kubejs:animal_types",
        "kubejs:colonist_types"
    ]);

    event.createTag("kubejs:into_the_abyss", "tetra:geode", "Into the Abyss", "The dangerous depths that lurk below the surface", [
        // some default items
        "undergarden:catalyst",
        "kubejs:lower_abyss_portal_frame",
        "minecraft:end_portal_frame"
    ]);

})
