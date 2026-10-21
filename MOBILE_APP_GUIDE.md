# 📱 Raj Electric Wooden - Mobile App Guide

This guide explains how to install and run **Raj Electric Wooden** as a full mobile app using **PWA (Progressive Web App)** and **Android Native App (Capacitor)**.

---

## Method 1: Instant PWA Install (Android & iPhone) — No Store / No APK Needed

Your website is now a complete **Progressive Web App (PWA)** with offline caching, home-screen launch icons, and standalone app display.

### On Android (Chrome / Samsung Internet / Edge):
1. Open your website URL on your mobile phone browser (e.g. `http://localhost:5174` or your live domain).
2. You will see an **"Install Mobile App / મોબાઇલ એપ ઇન્સ્ટોલ કરો"** button inside the menu drawer or bottom banner.
3. Tap **"Install App"** (or tap the 3 dots **⋮** in Chrome and select **"Install app"** or **"Add to Home screen"**).
4. The **Raj Electric** icon will appear on your phone's home screen alongside your regular native apps!
5. When opened, it launches in **full-screen standalone mode** without any browser address bar.

### On iPhone / iPad (Safari):
1. Open the website in **Safari**.
2. Tap the **Share button** (square with upward arrow `⎋`) at the bottom of the screen.
3. Scroll down and tap **"Add to Home Screen" (`+`)**.
4. Tap **"Add"** in the top right.
5. The **Raj Electric** app icon will be installed on your iOS home screen.

---

## Method 2: Standalone Native Android App (APK / Android Studio)

A complete native Android project has been generated in the `android/` directory using **Capacitor**.

### Quick Commands:

```bash
# 1. Rebuild web code and sync assets to Android:
npm run build:app

# 2. Open the project directly in Android Studio:
npm run open:android

# 3. Generate high-resolution app icons anytime:
npm run generate:icons
```

---

### How to Build the `.apk` File:

#### Option A: Using Android Studio (Recommended)
1. Install [Android Studio](https://developer.android.com/studio) if you haven't already.
2. In the project terminal, run:
   ```bash
   npm run open:android
   ```
3. Once Android Studio opens the `android/` folder:
   - Click **Build** from the top menu.
   - Select **Build Bundle(s) / APK(s)** -> **Build APK(s)**.
4. Android Studio will compile your app and show a notification with a **"locate"** link.
5. Your `.apk` file will be generated at:
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```
6. You can send this `.apk` directly via WhatsApp, Bluetooth, or Google Drive to any Android phone and install it immediately!

#### Option B: Building via Command Line (Gradle)
```powershell
cd android
.\gradlew assembleDebug
```
The output APK will be placed in:
`android/app/build/outputs/apk/debug/app-debug.apk`

---

## App Details & Configuration:
* **App Name:** Raj Electric Wooden
* **Package ID:** `com.rajelectric.app`
* **Theme Color:** `#1976D2` (Primary Blue)
* **Background Color:** `#FFFFFF`
* **Orientation:** Portrait
* **Offline Caching:** Handled via Service Worker (`public/sw.js`)
* **Icons:** Located in `public/icons/` and synced with Android mipmap folders (`mipmap-hdpi`, `mipmap-xhdpi`, etc.)
