import { CheckIcon, FlowerMark } from "@/components/Icons";

export const metadata = {
  title: "Obrigada pela sua inscrição | Teneci Modes",
};

export default function ObrigadoPage() {
  return (
    <main className="thanks-page">
      <div className="thanks-orbit thanks-orbit-one" aria-hidden="true" />
      <div className="thanks-orbit thanks-orbit-two" aria-hidden="true" />
      <section className="thanks-card">
        <div className="thanks-mark"><FlowerMark /></div>
        <p className="eyebrow">Seu próximo passo</p>
        <h1>Obrigada por escolher compreender antes de se cobrar.</h1>
        <p className="thanks-lead">Se você chegou a esta página depois de concluir o pagamento, aguarde a confirmação da Hotmart e siga as orientações exibidas na plataforma.</p>
        <div className="thanks-steps">
          <div><span><CheckIcon /></span><p><strong>Verifique a confirmação</strong>Consulte o status da compra na Hotmart.</p></div>
          <div><span><CheckIcon /></span><p><strong>Acompanhe as orientações</strong>Os próximos passos da inscrição serão informados pelos canais vinculados à sua compra.</p></div>
          <div><span><CheckIcon /></span><p><strong>Guarde seus dados</strong>Mantenha acessíveis as informações usadas no pagamento para consultar sua compra.</p></div>
        </div>
        <p className="small-note">A data e o horário do encontro, o link de transmissão e o acesso à comunidade ainda dependem das orientações operacionais da organização.</p>
      </section>
    </main>
  );
}
