# 3D Models Directory

Place your GLB/GLTF 3D model files here.

## Supported Formats
- `.glb` (recommended - binary, smaller file size)
- `.gltf` (JSON format with separate resources)

## Adding Models

1. Export your 3D models from your CAD software (SolidWorks, Fusion 360, Blender, etc.)
2. Convert to GLB/GLTF format if needed
3. Place the files in this directory
4. Reference them in your code using `/models/your-model.glb`

## Example Files

You can download free sample models from:
- [Sketchfab](https://sketchfab.com/features/gltf) - Filter by "Downloadable"
- [Poly Haven](https://polyhaven.com/models)
- [glTF Sample Models](https://github.com/KhronosGroup/glTF-Sample-Models)

## Optimization Tips

- Keep file sizes under 10MB for web performance
- Use Draco compression for GLB files
- Reduce polygon count for web use (aim for <100K polygons)
- Bake textures when possible
- Use tools like [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline) to optimize

## Current Model References in Code

The following model URLs are referenced in the codebase:
- `/models/sample-machine.glb`
- `/models/sample-component.glb`
- `/models/pump.glb`
- `/models/press.glb`
- `/models/robot.glb`
- `/models/conveyor.glb`
- `/models/valve.glb`
- `/models/motor.glb`

Simply add files with these names to see them in the application.
