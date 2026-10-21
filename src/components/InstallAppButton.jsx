import React, { useState, useEffect } from 'react';
import { Smartphone, Download, Check, Share, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function InstallAppButton({ className = '', variant = 'button' }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const { isGujarati } = useLanguage();

  useEffect(() => {
    // Check if already in standalone app mode
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
      setIsInstalled(true);
    }

    // Detect iOS devices
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isInstalled) {
      return;
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      // Fallback instruction for Android Chrome / browsers
      alert(
        isGujarati
          ? "એપ ઇન્સ્ટોલ કરવા માટે બ્રાઉઝરના મેનુ (ત્રણ ટપકાં ⋮) પર ક્લિક કરો અને 'Install App' અથવા 'Add to Home screen' પસંદ કરો."
          : "To install the app, tap your browser menu (⋮) and select 'Install app' or 'Add to Home screen'."
      );
    }
  };

  if (isInstalled) {
    return (
      <div className={`app-installed-badge ${className}`}>
        <Check size={16} />
        <span>{isGujarati ? "એપ ઇન્સ્ટોલ થયેલ છે" : "App Installed"}</span>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <>
        <div className={`install-app-banner ${className}`}>
          <div className="install-banner-left">
            <div className="install-app-icon">
              <Smartphone size={20} />
            </div>
            <div>
              <div className="install-banner-title">
                {isGujarati ? "રાજ ઇલેક્ટ્રીક મોબાઇલ એપ" : "Raj Electric Mobile App"}
              </div>
              <div className="install-banner-sub">
                {isGujarati ? "ઝડપી ઓર્ડર અને ક્વોટેશન માટે ફોનમાં રાખો" : "Install on your phone for instant access"}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleInstallClick}
            className="btn btn-primary btn-sm install-cta-btn"
          >
            <Download size={15} />
            <span>{isGujarati ? "ઇન્સ્ટોલ કરો" : "Install App"}</span>
          </button>
        </div>

        {/* iOS Install Instructions Modal */}
        {showIOSGuide && (
          <div className="modal-overlay" onClick={() => setShowIOSGuide(false)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 420 }}>
              <div className="modal-header">
                <h3 className="modal-title">
                  {isGujarati ? "iPhone / iPad પર ઇન્સ્ટોલ કરો" : "Install on iPhone / iPad"}
                </h3>
                <button className="modal-close-btn" onClick={() => setShowIOSGuide(false)}>
                  <X size={20} />
                </button>
              </div>
              <div style={{ padding: '1.25rem', fontSize: '0.92rem', lineHeight: '1.6', color: 'var(--color-body-text)' }}>
                <p style={{ marginBottom: '1rem' }}>
                  {isGujarati
                    ? "Safari બ્રાઉઝરમાં રાજ ઇલેક્ટ્રીક એપને હોમ સ્ક્રીન પર ઉમેરવા માટે નીચેના પગલાં અનુસરો:"
                    : "To install Raj Electric on your Apple home screen:"}
                </p>
                <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <li>
                    {isGujarati ? "સફારીમાં નીચેના " : "Tap the "}
                    <strong>Share button <Share size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /></strong>
                    {isGujarati ? " પર ટેપ કરો." : " in Safari."}
                  </li>
                  <li>
                    {isGujarati ? "નીચે સ્ક્રોલ કરો અને " : "Scroll down and tap "}
                    <strong>'Add to Home Screen' (+)</strong>
                    {isGujarati ? " પસંદ કરો." : "."}
                  </li>
                  <li>
                    {isGujarati ? "ઉપર જમણી બાજુ " : "Tap "}
                    <strong>'Add'</strong>
                    {isGujarati ? " પર ક્લિક કરો." : " in the top corner."}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleInstallClick}
        className={`btn btn-secondary install-app-btn ${className}`}
        title="Install Raj Electric Mobile App on your device"
      >
        <Smartphone size={16} />
        <span>{isGujarati ? "મોબાઇલ એપ ઇન્સ્ટોલ કરો" : "Install Mobile App"}</span>
      </button>

      {/* iOS Install Instructions Modal */}
      {showIOSGuide && (
        <div className="modal-overlay" onClick={() => setShowIOSGuide(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 420 }}>
            <div className="modal-header">
              <h3 className="modal-title">
                {isGujarati ? "iPhone / iPad પર ઇન્સ્ટોલ કરો" : "Install on iPhone / iPad"}
              </h3>
              <button className="modal-close-btn" onClick={() => setShowIOSGuide(false)}>
                <X size={20} />
              </button>
            </div>
            <div style={{ padding: '1.25rem', fontSize: '0.92rem', lineHeight: '1.6', color: 'var(--color-body-text)' }}>
              <p style={{ marginBottom: '1rem' }}>
                {isGujarati
                  ? "Safari બ્રાઉઝરમાં રાજ ઇલેક્ટ્રીક એપને હોમ સ્ક્રીન પર ઉમેરવા માટે:"
                  : "To install Raj Electric on your Apple home screen:"}
              </p>
              <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li>
                  {isGujarati ? "સફારીમાં નીચેના " : "Tap the "}
                  <strong>Share button <Share size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /></strong>
                  {isGujarati ? " પર ટેપ કરો." : " in Safari."}
                </li>
                <li>
                  {isGujarati ? "નીચે સ્ક્રોલ કરો અને " : "Scroll down and tap "}
                  <strong>'Add to Home Screen' (+)</strong>
                  {isGujarati ? " પસંદ કરો." : "."}
                </li>
                <li>
                  {isGujarati ? "ઉપર જમણી બાજુ " : "Tap "}
                  <strong>'Add'</strong>
                  {isGujarati ? " પર ક્લિક કરો." : " in the top right."}
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
