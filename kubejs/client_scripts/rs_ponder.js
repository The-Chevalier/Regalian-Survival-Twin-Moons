onEvent("ponder.registry", (event) => {
	event.create("kubejs:broken_fabricator").scene("broken_fabricator_scene", "Fixing the Broken Fabricator", (scene, util) => {
    /**
         * Shows the whole structure.
         * Alternatively, `scene.showBasePlate()` can be used to show the base plate.
         * Useful for animating different parts of the structure.
         */
    scene.showStructure();


            scene.idle(10);

            const centerBlockPos = util.grid.at(2, 0, 2);
            const centerTop = util.vector.topOf(centerBlockPos);

            const block =  scene.world.setBlock([2, 1, 2], "kubejs:broken_fabricator", false);
//Part 1
            scene.text(60, "In order to create more sophisticated equipment, the Fabricator must be repaired.", [2.5, 2.5, 2.5]).placeNearTarget();          
            scene.idle(80);
            /**
             * down, up, left, right to set where it should point at
             */



//Part 2

            scene.addKeyframe();
            /**
             *  [2.5, 2.5, 2.5] -> position at [x, y, z]
             */
            scene.text(60, "The first step will involve fixing the outer casing of the Fabricator.", [2.5, 2.5, 2.5]).placeNearTarget();
            scene.idle(80);

//Part 3
            scene.showControls(120, centerBlockPos.above(2), "down").rightClick().withItem("create:iron_sheet");
            scene.addKeyframe();
            scene
                .text(60, "Applying an iron sheet will convert it into a Fabricator Casing.", centerBlockPos.above(2))
                .placeNearTarget();

            scene.world.replaceBlocks([2, 1, 2], "kubejs:fabricator_casing", true);
                scene.idle(80);
            
//Part 4
            scene.addKeyframe();
            scene.text(60, "In order to fully restore the Fabricator, it will need a power source.", [2.5, 2.5, 2.5]).placeNearTarget();
            scene.idle(80);

//Part 5
            scene.addKeyframe();
            scene.showControls(60, centerBlockPos.above(2), "down").rightClick().withItem("kubejs:advanced_battery");
            scene
                .text(60, "Applying an advanced battery will convert it into a Fabricator.", centerBlockPos.above(2))
                .placeNearTarget();

                scene.world.replaceBlocks([2, 1, 2], "minecraft:crafting_table", true);
            scene.idle(80);

//Part 6
            scene.addKeyframe();

            scene.world.createEntity("skeleton", [4.5, 1, 0]);
            scene.world.createEntity("creeper", [4, 1, 2]);
            scene.world.createEntity("stray", [3.5, 1, 4]);

            scene.text(80, "Batteries and iron sheets can be acquired by defeating Robotic enemies such as Rogue Sentries.", [2.5, 2.5, 2.5]).placeNearTarget();

            scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(-0.07, 0.4, 0), "create:iron_sheet");
            scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(-0.07, 0.4, -0.07), "kubejs:advanced_battery");
            scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(0, 0.4, -0.07), "iron_nugget");
            scene.idle(80);
        })}
);

onEvent("ponder.registry", (event) => {
	event.create("easypaxellite:stone_paxel").scene("tetra_scene", "Building Better Tools", (scene, util) => {
    /**
         * Shows the whole structure.
         * Alternatively, `scene.showBasePlate()` can be used to show the base plate.
         * Useful for animating different parts of the structure.
         */
    scene.showStructure();


            scene.idle(10);

            const centerBlockPos = util.grid.at(2, 0, 2);
            const centerTop = util.vector.topOf(centerBlockPos);

            const block =  scene.world.setBlock([2, 1, 2], "minecraft:crafting_table", false);
//Part 1
            scene.text(80, "While the multitool is helpful, it is not very effective.", [2.5, 2.5, 2.5]).placeNearTarget();          
            scene.idle(100);
            /**
             * down, up, left, right to set where it should point at
             */



//Part 2

            scene.addKeyframe();
            /**
             *  [2.5, 2.5, 2.5] -> position at [x, y, z]
             */
            scene.text(80, "Currently, only improvised and crude tools can be made.", [2.5, 2.5, 2.5]).placeNearTarget();
            scene.idle(100);

//Part 2

scene.addKeyframe();
/**
 *  [2.5, 2.5, 2.5] -> position at [x, y, z]
 */
scene.text(100, "A Fabricator and Wooden/Crude Hammer will be needed in order to create a workbench and make upgrades to these tools.", [2.5, 2.5, 2.5]).placeNearTarget();
scene.idle(120);


//Part 3
            scene.showControls(100, centerBlockPos.above(2), "down").rightClick().withItem("kubejs:dummy_tetra_hammer");
            scene.addKeyframe();
            scene
                .text(100, "To make a workbench, right click a Fabricator with a Wooden Hammer.", centerBlockPos.above(2))
                .placeNearTarget();
                scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(-0.07, 0.4, -0.07), "kubejs:dummy:tetra_hammer");
            scene.world.replaceBlocks([2, 1, 2], "tetra:basic_workbench", true);
                scene.idle(120);
            
//Part 4
            scene.addKeyframe();
            scene.text(120, "Basic tools can be modified in the workbench. Some modules will require better hammers, so be sure to upgrade the hammer as well.", [2.5, 2.5, 2.5]).placeNearTarget();
            scene.idle(140);

//Part 5
            scene.addKeyframe();
            scene.showControls(100, centerBlockPos.above(2), "down").rightClick().withItem("kubejs:dummy_tetra_holo");
            scene
                .text(120, "Information regarding materials and modules can be found in the Holosphere.", centerBlockPos.above(2))
                .placeNearTarget();

                scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(-0.07, 0.4, 0), "kubejs:dummy_tetra_holo");
            scene.idle(120);
        })}
);





onEvent("ponder.registry", (event) => {
	event.create("kubejs:robotic_types").scene("robotic_types_scene", "Robotic Types", (scene, util) => {
    /**
         * Shows the whole structure.
         * Alternatively, `scene.showBasePlate()` can be used to show the base plate.
         * Useful for animating different parts of the structure.
         */
    scene.showStructure();


            scene.idle(10);

            const centerBlockPos = util.grid.at(2, 0, 2);
            const centerTop = util.vector.topOf(centerBlockPos);

            scene.world.createEntity("skeleton", [2.5, 1, 2.5]);
//Part 1
            scene.text(60, "Vultor is home to many synthetic lifeforms, most of which are hostile.", [2.5, 2.5, 2.5]).placeNearTarget();          
            scene.idle(80);
            /**
             * down, up, left, right to set where it should point at
             */



//Part 2

            scene.addKeyframe();
            /**
             *  [2.5, 2.5, 2.5] -> position at [x, y, z]
             */
            scene.text(80, "The most common robotic lifeforms are Sentries.", [2.5, 2.5, 2.5]).placeNearTarget();
            scene.idle(100);
//Part 3
            scene.addKeyframe();
            scene.text(80, "Sentries are hostile bipedal automatons. They seem to only attack foreign entities.", centerBlockPos.above(2))
                .placeNearTarget();

                scene.idle(100);
            
//Part 4
            scene.addKeyframe();
            scene.text(80, "Sentries vary in appearance depending on where they are located.", [0.5, 2.5, 2.5]).placeNearTarget();

            scene.world.createEntity("stray", [0.5, 1, 2.5]);
            scene.world.createEntity("wither_skeleton", [4.5, 1, 2.5]);

            scene.idle(100);

//Part 5
            scene.addKeyframe();
            scene.world.createEntity("creeper", [4.5, 1, 0.5]);
            scene
                .text(80, "Demolitionists are dangerous, self-destructive machines, closely related to Sentries.", [4.5, 2.5, 0.5])
                .placeNearTarget();


            scene.idle(100);

//Part 6
            scene.addKeyframe();


            scene.text(80, "All robotic entities drop iron components and advanced batteries.", [0.5, 2.5, 2.5]).placeNearTarget();

            scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(-0.07, 0.4, 0), "create:iron_sheet");
            scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(-0.07, 0.4, -0.07), "kubejs:advanced_battery");
            scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(0, 0.4, -0.07), "iron_nugget");
            scene.idle(100);
        })}
);

onEvent("ponder.registry", (event) => {
	event.create("kubejs:fraktan_types").scene("fraktan_types_scene", "Fraktan Types", (scene, util) => {
    /**
         * Shows the whole structure.
         * Alternatively, `scene.showBasePlate()` can be used to show the base plate.
         * Useful for animating different parts of the structure.
         */
    scene.showStructure();


            scene.idle(10);

            const centerBlockPos = util.grid.at(2, 0, 2);
            const centerTop = util.vector.topOf(centerBlockPos);

            scene.world.createEntity("pillager", [2.5, 1, 2.5]);
//Part 1
            scene.text(60, "The Fraktans are the hardy natives which inhabit these lands.", [2.5, 2.5, 2.5]).placeNearTarget();          
            scene.idle(80);
            /**
             * down, up, left, right to set where it should point at
             */



//Part 2

            scene.addKeyframe();
            /**
             *  [2.5, 2.5, 2.5] -> position at [x, y, z]
             */
            scene.text(80, "Their scaly skin and headcases serve as natural armor.", [2.5, 2.5, 2.5]).placeNearTarget();
            scene.idle(100);
//Part 3
            scene.addKeyframe();
            scene.text(80, "Their bulky, dense builds make them stronger and faster than humans.", centerBlockPos.above(2))
                .placeNearTarget();

                scene.idle(100);
            
//Part 4
            scene.addKeyframe();
            scene.text(80, "Fraktans of varying prestige and speciality can be found, but only in specific contexts.", [0.5, 2.5, 2.5]).placeNearTarget();

            scene.world.createEntity("illusioner", [0.5, 1, 2.5]);
            scene.world.createEntity("evoker", [4.5, 1, 2.5]);

            scene.idle(100);

//Part 5
            scene.addKeyframe();
            scene.world.createEntity("vindicator", [4.5, 1, 0.5]);
            scene
                .text(80, "The most dangerous fraktans will emerge in the midst of raids on colonist settlements.", [4.5, 2.5, 0.5])
                .placeNearTarget();


            scene.idle(100);

//Part 6
            scene.addKeyframe();


            scene.text(80, "All fraktan entities drop severed horns. Stronger fraktans can drop tempered scales", [0.5, 2.5, 2.5]).placeNearTarget();

            scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(-0.07, 0.4, 0), "kubejs:severed_horn");
            scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(-0.07, 0.4, -0.07), "kubejs:tempered_scales");
            scene.idle(100);
        })}
);



onEvent("ponder.registry", (event) => {
	event.create("kubejs:animal_types").scene("animal_types_scene", "Animal Types", (scene, util) => {
    /**
         * Shows the whole structure.
         * Alternatively, `scene.showBasePlate()` can be used to show the base plate.
         * Useful for animating different parts of the structure.
         */
    scene.showStructure();


            scene.idle(10);

            const centerBlockPos = util.grid.at(2, 0, 2);
            const centerTop = util.vector.topOf(centerBlockPos);

            scene.world.createEntity("cow", [2.5, 1, 2.5]);
//Part 1
            scene.text(60, "Many peculiar creatures can be found on Vultor.", [2.5, 2.5, 2.5]).placeNearTarget();          
            scene.idle(80);
            /**
             * down, up, left, right to set where it should point at
             */



//Part 2

            scene.addKeyframe();
            /**
             *  [2.5, 2.5, 2.5] -> position at [x, y, z]
             */
            scene.text(80, "Most animals are neutral, and will not attack unless they are harmed first.", [2.5, 2.5, 2.5]).placeNearTarget();
            scene.idle(100);
            
//Part 4
            scene.addKeyframe();
            scene.text(80, "Some creatures may retaliate in groups.", [0.5, 2.5, 2.5]).placeNearTarget();

            scene.world.createEntity("chicken", [0.5, 1, 2.5]);
            scene.world.createEntity("pig", [4.5, 1, 2.5]);

            scene.idle(100);

//Part 5
            scene.addKeyframe();
            scene.world.createEntity("wolf", [4.5, 1, 0.5]);
            scene
                .text(80, "Certain creatures can be domesticated, courtesy of the fraktans.", [4.5, 2.5, 0.5])
                .placeNearTarget();


            scene.idle(100);

//Part 6
            scene.addKeyframe();


            scene.text(80, "Some creatures drop hides that can be turned into leather.", [0.5, 2.5, 2.5]).placeNearTarget();

            scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(-0.07, 0.4, 0), "kubejs:gullhorn_hide");
            scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(-0.07, 0.4, -0.07), "kubejs:niteya_hide");
            scene.idle(100);

//Part 6
            scene.addKeyframe();


            scene.text(80, "Particularly toothy creatures may drop vicious fangs.", [0.5, 2.5, 2.5]).placeNearTarget();

            scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(0, 0.4, -0.07), "kubejs:vicious_fangs");
            scene.idle(100);


        })}
);


onEvent("ponder.registry", (event) => {
	event.create("kubejs:colonist_types").scene("colonist_types_scene", "Colonist Types", (scene, util) => {
    /**
         * Shows the whole structure.
         * Alternatively, `scene.showBasePlate()` can be used to show the base plate.
         * Useful for animating different parts of the structure.
         */
    scene.showStructure();


            scene.idle(10);

            const centerBlockPos = util.grid.at(2, 0, 2);
            const centerTop = util.vector.topOf(centerBlockPos);

            scene.world.createEntity("villager", [2.5, 1, 2.5]);
//Part 1
            scene.text(60, "The Colonists are the only humans on this world.", [2.5, 2.5, 2.5]).placeNearTarget();          
            scene.idle(80);
            /**
             * down, up, left, right to set where it should point at
             */



//Part 2

            scene.addKeyframe();
            /**
             *  [2.5, 2.5, 2.5] -> position at [x, y, z]
             */
            scene.text(80, "They have crash landed here, and are struggling to survive.", [2.5, 2.5, 2.5]).placeNearTarget();
            scene.idle(100);
//Part 3
            scene.addKeyframe();
            scene.text(80, "Everything seems to want them dead...", centerBlockPos.above(2))
                .placeNearTarget();

                scene.idle(100);
            
//Part 4
            scene.addKeyframe();
            scene.text(80, "As a result, colonists have banded together in defensive settlements, and some have taken up arms.", [0.5, 2.5, 2.5]).placeNearTarget();

            scene.world.createEntity("guardvillagers:guard", [0.5, 1, 2.5]);
            scene.world.createEntity("guardvillagers:guard", [4.5, 1, 2.5]);

            scene.idle(100);

//Part 5
            scene.addKeyframe();
            scene.world.createEntity("iron_golem", [4.5, 1, 0.5]);
            scene
                .text(80, "Robotic assistants have been repurposed for defense, to improve their odds against the resilient fraktans.", [4.5, 2.5, 0.5])
                .placeNearTarget();


            scene.idle(100);

//Part 5
scene.addKeyframe();
scene.world.createEntity("zombie", [2.5, 1, 0.5]);
scene
    .text(80, "Many colonists have gone insane from the prospect of being stuck here. They are known as deserters.", [2.5, 2.5, 0.5])
    .placeNearTarget();


scene.idle(100);

//Part 6
scene.addKeyframe();


scene.text(80, "Deserters will not hesitate to attack you and other colonists. Tread carefully.", [2.5, 2.5, 2.5]).placeNearTarget();
scene.idle(100);

//Part 6
            scene.addKeyframe();


            scene.text(80, "Aiding settlements in raids will earn you the trust of the colonists and their soldiers", [0.5, 2.5, 2.5]).placeNearTarget();
            scene.idle(100);
        })}
);


onEvent("ponder.registry", (event) => {
	event.create("kubejs:lower_abyss_portal_frame").scene("lower_abyss_portal_scene", "Reaching the Lower Abyss", 
    "kubejs:lower_abyss_portal",
    
    (scene, util) => {
    /**
         * Shows the whole structure.
         * Alternatively, `scene.showBasePlate()` can be used to show the base plate.
         * Useful for animating different parts of the structure.
         */
    scene.showStructure();


            scene.idle(10);

            const centerBlockPos = util.grid.at(2, 0, 2);
            const centerTop = util.vector.topOf(centerBlockPos);

//Part 1
            scene.text(80, "Using materials from the Upper Abyss, the frame for a gateway to the Lower Abyss can be built.", [2.5, 2.5, 2.5]).placeNearTarget();          
            scene.idle(100);
            /**
             * down, up, left, right to set where it should point at
             */



//Part 2

            scene.addKeyframe();
            /**
             *  [2.5, 2.5, 2.5] -> position at [x, y, z]
             */
            scene.text(80, "Corner blocks are not required.", [2.5, 2.5, 2.5]).placeNearTarget();
            scene.idle(100);

//Part 2

scene.addKeyframe();
/**
 *  [2.5, 2.5, 2.5] -> position at [x, y, z]
 */
scene.showControls(100, centerBlockPos.above(2), "down").rightClick().withItem("minecraft:flint_and_steel");
scene.text(100, "Light a fire inside of the frame to activate the portal.", [2.5, 2.5, 2.5]).placeNearTarget();
scene.idle(120);
})}
);


onEvent("ponder.registry", (event) => {
	event.create("undergarden:catalyst").scene("upper_abyss_portal_scene", "Reaching the Upper Abyss", 
    "kubejs:upper_abyss_portal",
    
    (scene, util) => {
    /**
         * Shows the whole structure.
         * Alternatively, `scene.showBasePlate()` can be used to show the base plate.
         * Useful for animating different parts of the structure.
         */
    scene.showStructure();


            scene.idle(10);

            const centerBlockPos = util.grid.at(2, 0, 2);
            const centerTop = util.vector.topOf(centerBlockPos);

//Part 1
            scene.text(80, "In order to descend into each layer of Vultor's depths, anomalous technologies must be used.", [2.5, 2.5, 2.5]).placeNearTarget();          
            scene.idle(100);
            /**
             * down, up, left, right to set where it should point at
             */

//Part 1
scene.text(80, "Below the bedrock of the caves lies the Upper Abyss.", [2.5, 2.5, 2.5]).placeNearTarget();          
scene.idle(100);
/**
 * down, up, left, right to set where it should point at
 */


//Part 1
scene.text(80, "To reach the Upper Abyss, a frame must be built out of stone or deepslate bricks.", [2.5, 2.5, 2.5]).placeNearTarget();          
scene.idle(100);
/**
 * down, up, left, right to set where it should point at
 */

//Part 2

            scene.addKeyframe();
            /**
             *  [2.5, 2.5, 2.5] -> position at [x, y, z]
             */
            scene.text(80, "Corner blocks are not required.", [2.5, 2.5, 2.5]).placeNearTarget();
            scene.idle(100);

//Part 2

scene.addKeyframe();
/**
 *  [2.5, 2.5, 2.5] -> position at [x, y, z]
 */
scene.showControls(100, centerBlockPos.above(2), "down").rightClick().withItem("undergarden:catalyst");
scene.text(100, "Construct an Upper Abyss Portal Key and right click the frame to open the gateway.", [2.5, 2.5, 2.5]).placeNearTarget();
scene.idle(120);




        })}
);

onEvent("ponder.registry", (event) => {
	event.create("minecraft:end_portal_frame").scene("void_portal_scene", "Reaching the Void", 
    "kubejs:void_portal",
    
    (scene, util) => {
    /**
         * Shows the whole structure.
         * Alternatively, `scene.showBasePlate()` can be used to show the base plate.
         * Useful for animating different parts of the structure.
         */
    scene.showStructure();


            scene.idle(10);

            const centerBlockPos = util.grid.at(2, 0, 2);
            const centerTop = util.vector.topOf(centerBlockPos);

//Part 1
            scene.text(80, "There is an anomalous realm that exists beyond Vultor. It is known as the Void.", [2.5, 2.5, 2.5]).placeNearTarget();          
            scene.idle(100);
            /**
             * down, up, left, right to set where it should point at
             */

//Part 1
scene.text(80, "It is possible to construct a special void gateway using materials from all layers of Vultor.", [2.5, 2.5, 2.5]).placeNearTarget();          
scene.idle(100);
/**
 * down, up, left, right to set where it should point at
 */


//Part 1
scene.text(80, "To reach the Void, a frame must be built out of special void portal frame parts.", [2.5, 2.5, 2.5]).placeNearTarget();          
scene.idle(100);
/**
 * down, up, left, right to set where it should point at
 */

//Part 2

scene.addKeyframe();
/**
 *  [2.5, 2.5, 2.5] -> position at [x, y, z]
 */
scene.showControls(100, centerBlockPos.above(2), "down").rightClick().withItem("minecraft:ender_eye");
scene.text(100, "12 Voideyes must be created and inserted into the recesses of the frame. Doing so will open the gateway.", [2.5, 2.5, 2.5]).placeNearTarget();
scene.idle(120);




        })}
);
