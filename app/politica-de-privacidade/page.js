import Link from 'next/link';
import { schemaBreadcrumb } from '@/lib/structured-data';

export const metadata = {
  title: 'Política de Privacidade',
  description: 'Saiba como o 3W Entretenimento coleta, usa e protege seus dados pessoais.',
  alternates: { canonical: 'https://3w-entretenimento.com/politica-de-privacidade' },
};

const LAST_UPDATED = '22 de abril de 2026';

export default function PoliticaDePrivacidadePage() {
  const breadcrumb = schemaBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Política de Privacidade', url: '/politica-de-privacidade' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">Política de Privacidade</span>
        </nav>
        <h1 className="text-4xl font-black text-white mb-2">Política de Privacidade</h1>
        <p className="text-[#737373] text-sm mb-10">Última atualização: {LAST_UPDATED}</p>
        <div className="space-y-8 text-[#b3b3b3] leading-relaxed">
          <section>
            <p>
              O <strong className="text-white">3W Entretenimento</strong> respeita
              a privacidade dos seus visitantes e está comprometido com a proteção dos seus dados pessoais,
              em conformidade com a{' '}
              <strong className="text-white">Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>.
            </p>
            <p className="mt-3">
              Esta Política descreve quais informações coletamos, como as utilizamos e quais são seus direitos
              enquanto titular de dados.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Informações que coletamos</h2>
            <p className="mb-3">Podemos coletar as seguintes categorias de dados:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong className="text-white">Dados de navegação:</strong> endereço IP, tipo de navegador,
                páginas visitadas, tempo de permanência e origem do acesso — coletados automaticamente por
                ferramentas de análise.
              </li>
              <li>
                <strong className="text-white">Dados fornecidos voluntariamente:</strong> nome e e-mail
                informados em formulários de contato ou newsletter.
              </li>
              <li>
                <strong className="text-white">Cookies e tecnologias similares:</strong> utilizados para
                personalizar a experiência, medir o desempenho do site e exibir conteúdos relevantes.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Como usamos seus dados</h2>
            <p className="mb-3">As informações coletadas são utilizadas para:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Operar, manter e melhorar o site;</li>
              <li>Analisar o tráfego e o comportamento dos usuários (de forma agregada e anonimizada);</li>
              <li>Responder a mensagens enviadas pelo formulário de contato;</li>
              <li>Enviar comunicações sobre novos conteúdos, quando o usuário optar por recebê-las;</li>
              <li>Cumprir obrigações legais.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Cookies e Consentimento</h2>
            <p className="mb-3">
              Utilizamos duas categorias de cookies:
            </p>
            <ul className="space-y-2 list-disc list-inside mb-3">
              <li>
                <strong className="text-white">Essenciais:</strong> necessários para o site funcionar
                (manter sessão, lembrar preferências, exibir este aviso). Não podem ser desativados.
              </li>
              <li>
                <strong className="text-white">Analíticos (opcionais):</strong> Google Analytics 4 e Meta
                Pixel, usados para entender o comportamento agregado de visitantes. Só são ativados após
                seu consentimento explícito no banner de cookies.
              </li>
            </ul>
            <p className="mb-3">
              Na sua primeira visita, um banner aparece no rodapé com três opções:
              <em> Aceitar todos</em>, <em>Recusar opcionais</em> e <em>Personalizar</em>. Sua escolha é
              registrada em um cookie próprio (<code className="text-[#FF6600]">3w_consent</code>) com
              validade de 180 dias; ao expirar, o banner reaparece para revalidação. Enquanto você não
              escolhe ou se escolhe recusar, nenhum cookie analítico é ativado — isso é feito via o
              Consent Mode v2 do Google, conforme recomendação da ANPD.
            </p>
            <p className="mb-3">
              Para revogar ou alterar seu consentimento a qualquer momento, apague o cookie{' '}
              <code className="text-[#FF6600]">3w_consent</code> nas configurações do seu navegador; o
              banner voltará na próxima visita. Você também pode configurar o navegador para recusar
              todos os cookies, mas isso pode afetar algumas funcionalidades.
            </p>
            <p>
              Widgets e integrações de terceiros (como feeds de redes sociais incorporados via Elfsight,
              player do Instagram, etc.) podem definir seus próprios cookies, sujeitos às políticas de
              privacidade dos respectivos fornecedores.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Compartilhamento de dados</h2>
            <p className="mb-3">
              Não vendemos, alugamos nem comercializamos seus dados pessoais. Podemos compartilhá-los
              apenas nas seguintes situações:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong className="text-white">Prestadores de serviço:</strong> plataformas de hospedagem,
                análise de tráfego e envio de e-mails que processam dados em nosso nome e sob nossa instrução.
              </li>
              <li>
                <strong className="text-white">Obrigação legal:</strong> quando exigido por lei, ordem
                judicial ou autoridade competente.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Serviços de terceiros</h2>
            <p>
              O site pode incorporar conteúdos e widgets de plataformas externas. O acesso a esses conteúdos está sujeito às políticas de privacidade
              de cada plataforma, sobre as quais não temos controle.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Retenção de dados</h2>
            <p>
              Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta Política
              ou para atender exigências legais. Dados de contato são retidos pelo período em que o
              relacionamento se mantiver ativo, podendo ser excluídos a qualquer momento mediante solicitação.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Seus direitos (LGPD)</h2>
            <p className="mb-3">
              Nos termos da LGPD, você tem direito a:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Confirmar a existência de tratamento dos seus dados;</li>
              <li>Acessar os dados que temos sobre você;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Revogar o consentimento a qualquer momento;</li>
              <li>Solicitar a portabilidade dos seus dados.</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer desses direitos, entre em contato conosco pelo{' '}
              <Link href="/contato" className="text-[#FF6600] hover:underline">
                formulário de contato
              </Link>.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações contra
              acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum sistema de
              transmissão pela internet é 100% seguro, e não podemos garantir segurança absoluta.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Menores de idade</h2>
            <p>
              Este site não é direcionado a menores de 13 anos e não coletamos intencionalmente dados
              de crianças. Caso identifiquemos que dados de um menor foram coletados sem consentimento
              parental, os removeremos prontamente.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política periodicamente. A data de &quot;última atualização&quot; no topo
              da página indicará quando a versão mais recente foi publicada. Recomendamos que você
              a revise regularmente.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Contato</h2>
            <p>
              Dúvidas, solicitações ou reclamações relacionadas a esta Política podem ser enviadas pelo
              nosso{' '}
              <Link href="/contato" className="text-[#FF6600] hover:underline">
                formulário de contato
              </Link>
              . Responderemos no prazo de até 15 dias úteis.
            </p>
          </section>
          <div className="pt-4 border-t border-[#1a1a1a]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#737373] hover:text-[#FF6600] text-sm transition-colors"
            >
              ← Voltar para o início
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
