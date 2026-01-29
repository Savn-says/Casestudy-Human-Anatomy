# How to Add a Realistic 3D Human Anatomy Model

## Quick Steps

1. **Download a free realistic human body GLB model** from one of these sources:

   **Option A: Sketchfab (Recommended)**
   - Go to: https://sketchfab.com/3d-models/free-human-body-base-mesh-female-35f25ce675594c0caf611f8c0617aaf1
   - Click "Download" → Select "GLB" format
   - Save the file

   **Option B: Other Free Sources**
   - https://sketchfab.com/tags/human (search for "free" and "downloadable")
   - https://www.renderhub.com/glb-3d-models/anatomy
   - Search for "free human body GLB" on Google

2. **Create the models folder** (if it doesn't exist):
   ```
   C:\Users\ThinkPad\Downloads\Human_anatomy\public\models\
   ```

3. **Place the downloaded GLB file** in that folder and rename it to:
   ```
   human_body.glb
   ```

4. **Restart your dev server** and refresh the browser:
   ```bash
   npm run dev
   ```

## What Happens

- The app will automatically detect and load your realistic model
- If no model is found, it will show a simple fallback (you'll see a tip message)
- Once you add the model, it will display automatically with full rotation/zoom controls

## File Structure Should Look Like:

```
Human_anatomy/
  ├── public/
  │   └── models/
  │       └── human_body.glb  ← Your realistic model goes here
  ├── src/
  └── ...
```

## Troubleshooting

- **Model not showing?** Check the browser console (F12) for errors
- **File too large?** Try a smaller/optimized GLB model
- **Still seeing fallback?** Make sure the file is named exactly `human_body.glb` (lowercase, no spaces)
