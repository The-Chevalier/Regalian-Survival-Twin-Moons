ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    event.remove('minecraft:mineable/paxel', 'kubejs:uradyne_ore')
    event.remove('minecraft:mineable/paxel', 'kubejs:amalgam_ore')
    event.remove('minecraft:mineable/paxel', 'kubejs:scrap_metal_ore')
    event.add('forge:ingots/steel', 'kubejs:steel_ingot')
    event.add('forge:nuggets/steel', 'kubejs:steel_nugget')
    event.add('forge:plates/steel', 'kubejs:steel_sheet')
    event.add('forge:ingots/bronze', 'kubejs:bronze_ingot')
    event.add('forge:nuggets/bronze', 'kubejs:bronze_nugget')
    event.add('forge:plates/bronze', 'kubejs:bronze_sheet')
    event.add('forge:ingots/tin', 'kubejs:tin_ingot')
    event.add('forge:nuggets/tin', 'kubejs:tin_nugget')
    event.add('forge:plates/tin', 'kubejs:tin_sheet')

})