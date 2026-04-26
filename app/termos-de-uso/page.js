import Link from 'next/link';
import { schemaBreadcrumb } from '@/lib/structured-data';
import NewsletterBanner from '@/components/NewsletterBanner';

export const metadata = {
  title: 'Termos de Uso',
  description: 'Leia os Termos de Uso do 3W Entretenimento e saiba as regras para utilização do nosso portal.',
  alternates: { canonical: 'https://3w-entretenimento.com/termos-de-uso' },
};

const LAST_UPDATED = '17 de abril de 2025';

export default function TermosDeUsoPage() {
  const breadcrumb = schemaBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Termos de Uso', url: '/termos-de-uso' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">Termos de Uso</span>
        </nav>

        <h1 className="text-4xl font-black text-white mb-2">Termos de Uso</h1>
        <p className="text-[#9ca3af] text-sm mb-10">Última atualização: {LAST_UPDATED}</p>

        <div className="space-y-8 text-[#b3b3b3] leading-relaxed">

          <section>
            <p>
              Bem-vindo ao <strong className="text-white">3W Entretenimento</strong>. Ao acessar ou utilizar
              este site, você concorda com os presentes Termos de Uso. Caso não concorde com qualquer
              disposição, solicitamos que não utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Sobre o site</h2>
            <p>
              O 3W Entretenimento é um portal de conteúdo editorial voltado ao universo do entretenimento,
              abrangendo filmes, séries, comics, esportes e notícias relacionadas. Todo o conteúdo
              disponibilizado tem caráter informativo e jornalístico.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Aceitação dos termos</h2>
            <p>
              O uso do site implica aceitação integral e irrestrita destes Termos de Uso e da nossa{' '}
              <Link href="/politica-de-privacidade" className="text-[#FF6600] hover:underline">
                Política de Privacidade
              </Link>
              . Reservamo-nos o direito de alterá-los a qualquer momento, sendo as mudanças comunicadas
              por meio da atualização da data indicada nesta página.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Uso permitido</h2>
            <p className="mb-3">Ao utilizar este site, você se compromete a:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Usar o conteúdo exclusivamente para fins pessoais e não comerciais;</li>
              <li>Não reproduzir, copiar, distribuir ou publicar qualquer material deste site sem autorização prévia e por escrito;</li>
              <li>Não utilizar o site para fins ilícitos, fraudulentos ou que violem direitos de terceiros;</li>
              <li>Não tentar acessar áreas restritas, sistemas ou dados sem permissão;</li>
              <li>Não enviar conteúdo ofensivo, difamatório, discriminatório ou que viole a legislação brasileira.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo editorial produzido pelo 3W Entretenimento — incluindo textos, layouts,
              logotipos, ícones e identidade visual — é de propriedade exclusiva do portal e protegido
              pelas leis de direitos autorais (Lei nº 9.610/1998). É vedada qualquer reprodução, total
              ou parcial, sem autorização expressa.
            </p>
            <p className="mt-3">
              Imagens, logotipos e marcas de terceiros (estúdios, editoras, ligas esportivas etc.)
              pertencem aos seus respectivos detentores e são utilizados exclusivamente para fins
              informativos e editoriais, sem intenção de infringir direitos autorais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Conteúdo de terceiros</h2>
            <p>
              O site pode exibir links, feeds ou conteúdos incorporados de plataformas externas
              (Instagram, TikTok, YouTube, entre outras). O 3W Entretenimento não se responsabiliza
              pelo conteúdo, disponibilidade ou práticas de privacidade dessas plataformas. O acesso
              a esses serviços está sujeito aos termos de cada plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Isenção de responsabilidade</h2>
            <p className="mb-3">O 3W Entretenimento não garante:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>A disponibilidade ininterrupta ou livre de erros do site;</li>
              <li>A exatidão absoluta de todas as informações publicadas, especialmente datas e dados sujeitos a alteração pelos detentores originais;</li>
              <li>Que o site esteja livre de vírus ou outros componentes prejudiciais.</li>
            </ul>
            <p className="mt-3">
              O uso do site é feito por conta e risco do próprio usuário. Não nos responsabilizamos
              por quaisquer danos diretos ou indiretos decorrentes do acesso ou impossibilidade de
              acesso ao portal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Comentários e interações</h2>
            <p>
              Caso o site disponibilize canais de interação (formulários, redes sociais etc.), o usuário
              é inteiramente responsável pelo conteúdo que enviar. O 3W Entretenimento reserva-se o
              direito de remover qualquer conteúdo que viole estes Termos ou que seja considerado
              inapropriado, sem aviso prévio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Links externos</h2>
            <p>
              Este site pode conter links para sites de terceiros fornecidos apenas para conveniência
              do usuário. A inclusão de um link não implica endosso do conteúdo do site vinculado.
              Não temos controle sobre o conteúdo ou práticas de sites externos e não assumimos
              qualquer responsabilidade por eles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Privacidade</h2>
            <p>
              O tratamento dos dados pessoais coletados pelo site é regido pela nossa{' '}
              <Link href="/politica-de-privacidade" className="text-[#FF6600] hover:underline">
                Política de Privacidade
              </Link>
              , que integra estes Termos de Uso por referência.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Lei aplicável e foro</h2>
            <p>
              Estes Termos de Uso são regidos pela legislação brasileira. Fica eleito o foro da
              comarca de domicílio do usuário, ou, na impossibilidade de determinação, o foro da
              cidade de São Paulo/SP, para dirimir quaisquer controvérsias decorrentes da utilização
              deste site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Contato</h2>
            <p>
              Dúvidas sobre estes Termos podem ser enviadas pelo nosso{' '}
              <Link href="/contato" className="text-[#FF6600] hover:underline">
                formulário de contato
              </Link>
              . Responderemos no prazo de até 15 dias úteis.
            </p>
          </section>

          <div className="pt-4 border-t border-[#1a1a1a]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#9ca3af] hover:text-[#FF6600] text-sm transition-colors"
            >
              ← Voltar para o início
            </Link>
          </div>

        </div>
      </div>
      <NewsletterBanner />
    </>
  );
}
