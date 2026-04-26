import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const CATEGORIA_COLOR = {
  Cinema: '#e11d48',
  Séries: '#3b82f6',
  Comics: '#eab308',
  Futebol: '#22c55e',
  NBA: '#f97316',
  'Fórmula 1': '#ef4444',
  Games: '#a855f7',
  'Cultura Pop': '#ec4899',
  Esportes: '#22c55e',
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get('title') || '3W Entretenimento').slice(0, 110);
  const categoria = searchParams.get('category') || '';
  const accent = CATEGORIA_COLOR[categoria] || '#FF6600';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 70px',
          backgroundColor: '#0d0d0d',
          backgroundImage: `radial-gradient(circle at 90% 10%, ${accent}33 0%, transparent 50%), radial-gradient(circle at 0% 100%, #FF660022 0%, transparent 60%)`,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              fontSize: 36,
              fontWeight: 900,
              letterSpacing: '-0.02em',
              display: 'flex',
            }}
          >
            <span style={{ color: '#FF6600' }}>3W</span>
            <span style={{ color: '#fff', marginLeft: 8 }}>Entretenimento</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {categoria && (
            <span
              style={{
                fontSize: 24,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: accent,
                border: `2px solid ${accent}`,
                padding: '6px 16px',
                borderRadius: 8,
                alignSelf: 'flex-start',
              }}
            >
              {categoria}
            </span>
          )}
          <div
            style={{
              fontSize: title.length > 70 ? 56 : 72,
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: '95%',
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#9ca3af',
            fontSize: 22,
          }}
        >
          <span>3w-entretenimento.com</span>
          <span style={{ display: 'flex', gap: 8 }}>
            <span>🎬</span>
            <span>📺</span>
            <span>📚</span>
            <span>⚽</span>
            <span>🏀</span>
            <span>🏎️</span>
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
