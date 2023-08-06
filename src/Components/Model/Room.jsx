import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { MeshPhysicalMaterial, MeshStandardMaterial, MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
export function Room(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/room.gltf");
    const { actions, names } = useAnimations(animations, group);
    useEffect(()=>{
        actions[names[0]].play()
    }, [actions, names])

    useFrame(({mouse})=>{
            if(window.innerWidth > 1265){
                group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, -mouse.x * 0.09 , 0.025)
            }
        })

    Object.keys(materials).forEach((key)=>{
        if(key === "floor_material"){
            materials[key] = new MeshStandardMaterial({
                ...materials[key],
                color: "white"
            })
        }
        else if(key === "left_wall_material"){
            materials[key] = new MeshPhysicalMaterial({
                ...materials[key],
                color: "grey"
            })
        }
        else if(key === "right_wall_material"){
            materials[key] = new MeshPhysicalMaterial({
                ...materials[key],
                emissive: 0xF5EFDF,
                emissiveIntensity: 0.2
            })
        }
        else if( key === "tubelight_material"){
            materials[key] = new MeshStandardMaterial({
                ...materials[key],
                lightMapIntensity: 1,
                toneMapped: false,
                color: 0xF5EFDF
            })
        }

        else if( key === "wall_object_backlight_material"){
            materials[key]  = new MeshStandardMaterial({
                ...materials[key],
                emissiveIntensity: 0.5,
                toneMapped: false
            })
        }
        else if( key === "corner_backlight_material"){
            materials[key] = new MeshStandardMaterial({
                ...materials[key],
                emissiveIntensity: 1,
                toneMapped: false
            })
        }
        else if( key === "wood"){
            materials[key] = new MeshStandardMaterial({
                ...materials[key],
                color: 0xF5EFDF,
                metalness: 1,
                roughness: 1
            })
        }
        else if(key === "window_glass_material"){
            materials[key] = new MeshPhysicalMaterial({
                transparent: true,
                opacity: 0.1
            })
        }
        else{
            materials[key] = new MeshPhysicalMaterial({
                ...materials[key],
                flatShading:false
            })
        }
    })
  return (

    <group {...props} dispose={null} rotation={[0.3, -0.8, 0]} position={[0, 1, -5]}>
      <group name="Scene" ref={group} castShadow>
        <group
          name="gaming_chair"
          position={[-2.2, -0.02, 1.52]}
          rotation={[-Math.PI / 2, 0, -0.94]}
          scale={0.0085}
          userData={{ name: "gaming_chair" }}
        >
          <group
            name="gaming_chair_mesh"
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: "gaming_chair_mesh" }}
          >
            <group name="RootNode" userData={{ name: "RootNode" }}>
              <group
                name="Circle001"
                position={[0.45, 151.28, 100.43]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[8.57, 8.57, 22.59]}
                userData={{ name: "Circle.001" }}
              >
                <mesh
                  name="Circle001_Material002_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle001_Material002_0.geometry}
                  material={materials["Material.032"]}
                  position={[-3.05, 0.44, 0.14]}
                  rotation={[0, 0, -0.42]}
                  userData={{ name: "Circle.001_Material.002_0" }}
                />
              </group>
              <group
                name="Circle006"
                position={[-101.4, 47.51, 137.53]}
                rotation={[0, Math.PI / 9, -Math.PI / 2]}
                scale={-8.98}
                userData={{ name: "Circle.006" }}
              >
                <mesh
                  name="Circle006_Material002_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle006_Material002_0.geometry}
                  material={materials["Material.032"]}
                  position={[0.36, 1.53, 6.35]}
                  rotation={[0.42, 0, 0]}
                  userData={{ name: "Circle.006_Material.002_0" }}
                />
              </group>
              <group
                name="Plane002"
                position={[0.45, 207.53, 71.02]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={83.56}
                userData={{ name: "Plane.002" }}
              >
                <mesh
                  name="Plane001_Material001_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane001_Material001_0.geometry}
                  material={materials["Material.025"]}
                  userData={{ name: "Plane.001_Material.001_0" }}
                />
              </group>
              <group
                name="Plane005"
                position={[0.45, 132.15, 100.43]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={36.1}
                userData={{ name: "Plane.005" }}
              >
                <group
                  name="Plane004_Material_0"
                  position={[-0.2, 1.28, 2.67]}
                  rotation={[0, 0, -0.42]}
                  userData={{ name: "Plane.004_Material_0" }}
                >
                  <mesh
                    name="Plane004_Material_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_Material_0_1.geometry}
                    material={materials["Material.024"]}
                  />
                  <mesh
                    name="Plane004_Material_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_Material_0_2.geometry}
                    material={materials["Material.025"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>

        {/* main objects starts */}

        <group
          name="main_table"
          position={[1.36, 0.89, 0.38]}
          scale={[1.65, 0.4, 1]}
          userData={{ name: "main_table" }}
        >
          <mesh
            name="Cube029"
            castShadow
            receiveShadow
            geometry={nodes.Cube029.geometry}
            material={materials.sofa_material}
          />
          <mesh
            name="Cube029_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube029_1.geometry}
            material={materials.purple}
          />
        </group>
        <group
          name="perfume"
          position={[-0.18, 2.73, -4.49]}
          rotation={[0, 1.16, 0]}
          scale={0.04}
          userData={{ name: "perfume" }}
        >
          <mesh
            name="Cylinder002"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials.perfume_steel}
          />
          <mesh
            name="Cylinder002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.gold}
          />
          <mesh
            name="Cylinder002_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_2.geometry}
            material={materials.window_frame_material}
          />
        </group>
        <group
          name="tv"
          position={[1.24, 3.84, -4.76]}
          rotation={[1.57, 0, 0]}
          scale={[0.04, 0.01, 0.03]}
          userData={{ name: "tv" }}
        >
          <mesh
            name="Cylinder"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.desktop_material}
          />
          <mesh
            name="Cylinder_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials.screen}
          />
          <mesh
            name="Cylinder_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={materials.corner_backlight_material}
          />
        </group>
        <mesh
          name="tv_frame"
          castShadow
          receiveShadow
          geometry={nodes.tv_frame.geometry}
          material={materials.wood}
          position={[1.27, 3.72, -4.86]}
          scale={[2.8, 1.31, 0.04]}
          userData={{ name: "tv_frame" }}
        />
        <group
          name="tv_shelf"
          position={[1.32, 0.91, -4.53]}
          scale={[1.39, 0.62, 0.54]}
          userData={{ name: "tv_shelf" }}
        >
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.window_frame_material}
          />
          <mesh
            name="Cube002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.cuboard_drawer_handle_material}
          />
          <mesh
            name="Cube002_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_2.geometry}
            material={materials.blue_backlight}
          />
          <mesh
            name="Cube002_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_3.geometry}
            material={materials.window_frame_material}
          />
          <mesh
            name="Cube002_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_4.geometry}
            material={materials.red}
          />
          <mesh
            name="Cube002_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_5.geometry}
            material={materials.green}
          />
          <mesh
            name="Cube002_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_6.geometry}
            material={materials.blue}
          />
          <mesh
            name="Cube002_7"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_7.geometry}
            material={materials.yellow}
          />
          <mesh
            name="Cube002_8"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_8.geometry}
            material={materials.orange}
          />
          <mesh
            name="Cube002_9"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_9.geometry}
            material={materials.purple}
          />
          <mesh
            name="Cube002_10"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_10.geometry}
            material={materials.screen}
          />
          <mesh
            name="Cube002_11"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_11.geometry}
            material={materials.window_frame_material}
          />
        </group>
        <group
          name="computer_table"
          position={[-4.7, 2.34, 1.36]}
          scale={[0.78, 0.07, 2.13]}
          userData={{ name: "computer_table" }}
        >
          <mesh
            name="Cube013"
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={materials.window_frame_material}
          />
          <mesh
            name="Cube013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_1.geometry}
            material={materials.cuboard_drawer_handle_material}
          />
          <mesh
            name="Cube013_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_2.geometry}
            material={materials.corner_backlight_material}
          />
          <mesh
            name="Cube013_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_3.geometry}
            material={materials.window_frame_material}
          />
          <mesh
            name="Cube013_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_4.geometry}
            material={materials.black}
          />
          <mesh
            name="Cube013_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_5.geometry}
            material={materials.purple}
          />
          <mesh
            name="Cube013_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_6.geometry}
            material={materials.window_glass_material}
          />
        </group>
        <group
          name="desktop"
          position={[-4.48, 2.42, 2.28]}
          scale={[0.13, 0.01, 0.52]}
          userData={{ name: "desktop" }}
        >
          <mesh
            name="Cube012"
            castShadow
            receiveShadow
            geometry={nodes.Cube012.geometry}
            material={materials.window_frame_material}
          />
          <mesh
            name="Cube012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_1.geometry}
            material={materials.desktop_material}
          />
          <mesh
            name="Cube012_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_2.geometry}
            material={materials.screen}
          />
          <mesh
            name="Cube012_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_3.geometry}
            material={materials.corner_backlight_material}
          />
          <mesh
            name="Cube012_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_4.geometry}
            material={materials.grey}
          />
        </group>
        <group
          name="laptop"
          position={[-5.03, 2.9, -0.32]}
          rotation={[0, -0.2, 1.81]}
          scale={[0.38, 0.01, 0.52]}
          userData={{ name: "laptop" }}
        >
          <mesh
            name="Cube017"
            castShadow
            receiveShadow
            geometry={nodes.Cube017.geometry}
            material={materials.window_frame_material}
          />
          <mesh
            name="Cube017_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_1.geometry}
            material={materials.screen}
          />
          <mesh
            name="Cube017_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_2.geometry}
            material={materials.grey}
          />
          <mesh
            name="Cube017_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_3.geometry}
            material={materials.black}
          />
          <mesh
            name="Cube017_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_4.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="sofa"
          position={[1.41, 1.01, 5.39]}
          scale={[3.45, 0.35, 1.33]}
          userData={{ name: "sofa" }}
        >
          <mesh
            name="Cube019"
            castShadow
            receiveShadow
            geometry={nodes.Cube019.geometry}
            material={materials.sofa_material}
          />
          <mesh
            name="Cube019_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube019_1.geometry}
            material={materials.sofa_pillow_material}
          />
        </group>
        <group
          name="speakers"
          position={[-1.18, 1.1, -4.42]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.48, 0.89, 0.39]}
          userData={{ name: "speakers" }}
        >
          <mesh
            name="Cube020"
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials.window_frame_material}
          />
          <mesh
            name="Cube020_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_1.geometry}
            material={materials.black}
          />
          <mesh
            name="Cube020_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_2.geometry}
            material={materials.purple}
          />
          <mesh
            name="Cube020_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_3.geometry}
            material={materials.window_glass_material}
          />
          <mesh
            name="Cube020_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_4.geometry}
            material={materials.window_frame_material}
          />
          <mesh
            name="Cube020_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_5.geometry}
            material={materials.black}
          />
          <mesh
            name="Cube020_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_6.geometry}
            material={materials.purple}
          />
          <mesh
            name="Cube020_7"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_7.geometry}
            material={materials.window_glass_material}
          />
        </group>
        <group
          name="side_table"
          position={[-4.83, 1.54, 6.36]}
          scale={[0.67, 0.73, 0.94]}
          userData={{ name: "side_table" }}
        >
          <mesh
            name="Cube018"
            castShadow
            receiveShadow
            geometry={nodes.Cube018.geometry}
            material={materials.window_frame_material}
          />
          <mesh
            name="Cube018_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_1.geometry}
            material={materials.cuboard_drawer_handle_material}
          />
          <mesh
            name="Cube018_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_2.geometry}
            material={materials.blue}
          />
          <mesh
            name="Cube018_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_3.geometry}
            material={materials.pages_material}
          />
          <mesh
            name="Cube018_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_4.geometry}
            material={materials.red}
          />
          <mesh
            name="Cube018_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_5.geometry}
            material={materials.green}
          />
          <mesh
            name="Cube018_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_6.geometry}
            material={materials.black}
          />
        </group>
        <mesh
          name="mirror"
          castShadow
          receiveShadow
          geometry={nodes.mirror.geometry}
          material={materials.cuboard_mirror_material}
          position={[-4.06, 3.45, -3.5]}
          scale={[0.5, 1.64, 0.02]}
          userData={{ name: "mirror" }}
        />
        <mesh
          name="handle"
          castShadow
          receiveShadow
          geometry={nodes.handle.geometry}
          material={materials.cuboard_handle_material}
          position={[-3.12, 3.18, -3.45]}
          rotation={[0, 0, -1.57]}
          scale={[0.12, 0.1, 0.12]}
          userData={{ name: "handle" }}
        />
        <group
          name="cuboard"
          position={[-3.12, 2.89, -3.53]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}
          userData={{ name: "cuboard" }}
        >
          <mesh
            name="Cylinder001"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials.cuboard_key_material}
          />
          <mesh
            name="Cylinder001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.cuboard_material}
          />
          <mesh
            name="Cylinder001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_2.geometry}
            material={materials.cuboard_drawer_handle_material}
          />
        </group>
        <group
          name="main_wall"
          position={[-1.61, 1.93, -0.46]}
          scale={[5.79, 0.13, 5.38]}
          userData={{ name: "main_wall" }}
        >
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.floor_material}
          />
          <mesh
            name="Cube_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials.left_wall_material}
          />
          <mesh
            name="Cube_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials.right_wall_material}
          />
          <mesh
            name="Cube_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube_3.geometry}
            material={materials.corner_backlight_material}
          />
          <mesh
            name="Cube_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube_4.geometry}
            material={materials.window_frame_material}
          />
          <mesh
            name="Cube_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube_5.geometry}
            material={materials.window_glass_material}
          />
          <mesh
            name="Cube_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube_6.geometry}
            material={materials.tubelight_material}

          />
          <mesh
            name="Cube_7"
            castShadow
            receiveShadow
            geometry={nodes.Cube_7.geometry}
            material={materials.carpet_material}
          />
        </group>
        <group
          name="door_close"
          position={[-5.66, 3.85, -0.23]}
          scale={[0.02, 0.78, 0.62]}
          userData={{ name: "door_close" }}
        >
          <mesh
            name="Cube005"
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials.window_frame_material}
          />
          <mesh
            name="Cube005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={materials.window_glass_material}
          />
        </group>
        <group
          name="circle_light"
          position={[-5.49, 4.4, 1.98]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.24, 0.01, 0.24]}
          userData={{ name: "circle_light" }}
        >
          <mesh
            name="Cylinder007"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials.wall_object_backlight_material}
          />
          <mesh
            name="Cylinder007_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_1.geometry}
            material={materials.left_wall_material}
          />
        </group>
        <group
          name="plane_light"
          position={[-5.49, 4.4, 1.2]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.22}
          userData={{ name: "plane_light" }}
        >
          <mesh
            name="Plane002_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials.left_wall_material}
          />
          <mesh
            name="Plane002_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane002_2.geometry}
            material={materials.wall_object_backlight_material}
          />
        </group>
        <group
          name="traingle_light"
          position={[-5.49, 4.35, 2.76]}
          scale={[0.01, 0.25, 0.25]}
          userData={{ name: "traingle_light" }}
        >
          <mesh
            name="Cube022"
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials.left_wall_material}
          />
          <mesh
            name="Cube022_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube022_1.geometry}
            material={materials.wall_object_backlight_material}
          />
        </group>
        <mesh
          name="joystick"
          castShadow
          receiveShadow
          geometry={nodes.joystick.geometry}
          material={materials.joystick_material}
          position={[1.7, 1.35, 0.38]}
          rotation={[0, 0.29, 0]}
          scale={[0.25, -0.07, 0.13]}
          userData={{ name: "joystick" }}
        />
        <group
          name="remote"
          position={[0.45, 1.31, 0.38]}
          rotation={[0, 0.42, 0]}
          scale={[0.11, 0.03, 0.3]}
          userData={{ name: "remote" }}
        >
          <mesh
            name="Cube032"
            castShadow
            receiveShadow
            geometry={nodes.Cube032.geometry}
            material={materials.remote_material}
          />
          <mesh
            name="Cube032_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube032_1.geometry}
            material={materials.remote_button_material}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/room.gltf");
