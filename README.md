# HopistalAdaLovelace


#############################    <! -- index.html  -->   <! -- DOCUMENTO 1 -->   ###########################

<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Plantão - Escalas de Enfermagem</title>

<link rel="stylesheet" href="style.css">

</head>

<body>

<button id="theme-toggle" class="theme-toggle" type="button"
        onclick="toggleTheme()" aria-label="Ativar tema escuro" aria-pressed="false">
  <span class="theme-toggle-icon" aria-hidden="true">☾</span>
  <span class="theme-toggle-label">Tema escuro</span>
</button>

<!-- LOGIN -->

<section id="login" class="login">
  <div class="login-left">
    <div class="brand">Plantão.</div>
    <div class="login-message">
      <small>HOSPITAL Ada Lovelance</small>
      <h1>A escala certa, para cada plantão.</h1>
      <p>Elaboração, validação e publicação das escalas de enfermagem, respeitando jornadas, descansos, férias e competências.</p>
    </div>
  </div>

  <div class="login-right">
    <div class="login-box">
      <div class="eyebrow">ACESSO AO SISTEMA</div>
      <h2>Entrar</h2>
      <p class="description">Neste protótipo, escolha um perfil para simular o login.</p>

      <div class="role selected" onclick="selectRole(this,'Coordenação geral')">
        <div class="role-icon">◎</div>
        <div class="role-info">
          <strong>Coordenação geral</strong>
          <small>Aprova e publica as escalas de todos os setores</small>
        </div>
        <span class="check">✓</span>
      </div>

      <div class="role" onclick="selectRole(this,'Coordenador de setor')">
        <div class="role-icon">▤</div>
        <div class="role-info">
          <strong>Coordenador de setor</strong>
          <small>Elabora a escala do seu setor e registra as trocas</small>
        </div>
        <span class="check"></span>
      </div>

      <div class="role" onclick="selectRole(this,'Profissional de Enfermagem')">
        <div class="role-icon">♧</div>
        <div class="role-info">
          <strong>Profissional de Enfermagem</strong>
          <small>Consulta sua escala e solicita trocas</small>
        </div>
        <span class="check"></span>
      </div>

      <div id="person-select" class="hidden" style="margin-top:12px">
        <select id="person" class="field" style="width:100%">
          <option value="">Selecione o profissional</option>
          <option>Bianca Leal</option>
          <option>Larissa Monteiro</option>
          <option>Mateus Sampaio</option>
          <option>Tatiane Correia</option>
        </select>
      </div>

      <button class="btn btn-full" onclick="enterSystem()">Entrar　 →</button>
    </div>
  </div>
</section>

<!-- SISTEMA -->

<section id="system">

<aside class="sidebar">
  <div class="brand">Plantão.</div>
  <div class="brand-sub">Escalas de enfermagem</div>

  <nav class="menu">
    <button class="active" onclick="showPage('dashboard',this)"><span class="menu-icon">▦</span><span>Painel</span></button>
    <button onclick="showPage('escalas',this)"><span class="menu-icon">▣</span><span>Escalas</span></button>
    <button onclick="showPage('profissionais',this)"><span class="menu-icon">♙</span><span>Profissionais</span></button>
    <button onclick="showPage('setores',this)"><span class="menu-icon">▥</span><span>Setores</span></button>
    <button onclick="showPage('disponibilidade',this)"><span class="menu-icon">✈</span><span>Disponibilidade e afastamentos</span></button>
    <button onclick="showPage('trocas',this)"><span class="menu-icon">⇄</span><span>Trocas de plantão</span></button>
    <button onclick="showPage('historico',this)"><span class="menu-icon">◴</span><span>Histórico</span></button>
  </nav>

  <div class="user-box">
    <div class="avatar">CG</div>
    <div><strong id="user-name">Coordenação geral</strong><small id="user-role">Coordenação geral</small></div>
    <button class="logout" onclick="logout()" title="Sair">⇥</button>
  </div>
</aside>

<div class="top-hospital">Hospital Ada Lovelance</div>

<main>

<!-- PAINEL -->

<section id="dashboard" class="page active">
  <div class="page-header">
    <div>
      <div class="eyebrow">PAINEL</div>
      <h1>Olá, Coordenação geral</h1>
      <p>Acompanhe o ciclo das escalas de enfermagem, do cadastro à publicação.</p>
    </div>
  </div>

  <div class="grid-stats">
    <div class="card"><div class="stat-icon">♙</div><div class="stat-number" id="total-prof">38</div><div class="stat-label">Profissionais ativos</div></div>
    <div class="card"><div class="stat-icon">▥</div><div class="stat-number" id="total-setor">4</div><div class="stat-label">Setores</div></div>
    <div class="card"><div class="stat-icon">◷</div><div class="stat-number">0</div><div class="stat-label">Escalas em aprovação</div></div>
    <div class="card"><div class="stat-icon">⇄</div><div class="stat-number" id="total-trocas">1</div><div class="stat-label">Trocas pendentes</div></div>
  </div>

  <div class="dashboard-grid">
    <div>
      <div class="card">
        <div class="card-title">ESCALA MAIS RECENTE</div>
        <div class="recent-title">Escala Clínica Médica – 05/10 a 11/10</div>
        <div class="muted">05 de out – 11 de out · 0 inconsistências</div>
        <div style="margin-top:15px"><span class="badge">● Rascunho</span></div>
      </div>

      <div class="card" style="margin-top:18px">
        <div class="card-title">FLUXO DA ESCALA ATUAL</div>
        <div class="progress">
          <div class="step done"><div class="dot"></div>Cadastros</div>
          <div class="step current"><div class="dot"></div>Geração e ajustes</div>
          <div class="step"><div class="dot"></div>Aprovação da Coordenação</div>
          <div class="step"><div class="dot"></div>Aprovada</div>
          <div class="step"><div class="dot"></div>Publicada</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">FÉRIAS E AFASTAMENTOS</div>
      <p class="description">Nenhuma ausência prevista.</p>
    </div>
  </div>
</section>

<!-- ESCALAS -->

<section id="escalas" class="page">
  <div class="page-header">
    <div>
      <div class="eyebrow">ELABORAÇÃO</div>
      <h1>Escalas</h1>
      <p>Cada coordenador elabora a escala do seu setor. A coordenação geral acompanha, aprova e publica.</p>
    </div>
    <select class="field" onchange="filterEscalas(this.value)">
      <option value="Todas">Todas as situações</option>
      <option>Rascunho</option>
      <option>Publicada</option>
    </select>
  </div>
  <div class="list" id="escala-list"></div>
</section>

<!-- PROFISSIONAIS -->

<section id="profissionais" class="page">
  <div class="page-header">
    <div>
      <div class="eyebrow">CADASTROS</div>
      <h1>Profissionais</h1>
      <p>Enfermeiros, técnicos e auxiliares. Profissionais inativos permanecem no histórico.</p>
    </div>
    <button class="btn" onclick="openModal('professional-modal')">＋ Novo profissional</button>
  </div>

  <div class="toolbar">
    <input class="field" id="search-prof" placeholder="⌕ Buscar por nome ou COREN" oninput="renderProfessionals()">
    <select class="field" id="filter-sector" onchange="renderProfessionals()">
      <option value="">Todos os setores</option>
      <option>UTI Adulto</option>
      <option>Clínica Médica</option>
      <option>Pronto-Socorro</option>
      <option>Centro Cirúrgico</option>
    </select>
  </div>
  <div class="muted" id="prof-count" style="margin-bottom:12px"></div>
  <div class="list" id="professional-list"></div>
</section>

<!-- SETORES -->

<section id="setores" class="page">
  <div class="page-header">
    <div>
      <div class="eyebrow">CADASTROS</div>
      <h1>Setores</h1>
      <p>A necessidade de profissionais é definida por setor e turno. Cada setor possui um coordenador.</p>
    </div>
    <button class="btn" onclick="openModal('sector-modal')">＋ Novo setor</button>
  </div>
  <div class="sector-grid" id="sector-list"></div>
</section>

<!-- DISPONIBILIDADE -->

<section id="disponibilidade" class="page">
  <div class="page-header">
    <div>
      <div class="eyebrow">CADASTROS</div>
      <h1>Disponibilidade e afastamentos</h1>
      <p>Férias, licenças, afastamentos e solicitações de folga.</p>
    </div>
    <button class="btn" onclick="openModal('absence-modal')">＋ Registrar</button>
  </div>
  <div class="list" id="absence-list"></div>
</section>

<!-- TROCAS -->

<section id="trocas" class="page">
  <div class="page-header">
    <div>
      <div class="eyebrow">PLANTÕES</div>
      <h1>Trocas de plantão</h1>
      <p>O profissional solicita a troca e o coordenador do setor analisa e registra na escala.</p>
    </div>
    <select class="field" onchange="renderExchanges(this.value)">
      <option value="Todos">Todas</option>
      <option value="Pendente" selected>Pendente</option>
      <option value="Aprovada">Aprovadas</option>
      <option value="Recusada">Recusadas</option>
    </select>
  </div>
  <div class="list" id="exchange-list"></div>
</section>

<!-- HISTÓRICO -->

<section id="historico" class="page">
  <div class="page-header">
    <div>
      <div class="eyebrow">AUDITORIA</div>
      <h1>Histórico</h1>
      <p>Registro de elaborações, alterações, autorizações, aprovações e publicações.</p>
    </div>
  </div>
  <div class="toolbar">
    <input class="field" id="search-history" placeholder="⌕ Buscar no histórico" oninput="renderHistory()">
  </div>
  <div class="card timeline" id="history-list"></div>
</section>

</main>
</section>

<!-- MODAL PROFISSIONAL -->

<div class="modal" id="professional-modal">
  <div class="modal-box">
    <h2>Novo profissional</h2>
    <label>Nome completo</label>
    <input class="field" id="new-name" placeholder="Nome do profissional">
    <label>Cargo</label>
    <select class="field" id="new-position">
      <option>Enfermeiro(a)</option>
      <option>Técnico(a) de Enfermagem</option>
      <option>Auxiliar de Enfermagem</option>
    </select>
    <label>Setor</label>
    <select class="field" id="new-sector">
      <option>UTI Adulto</option>
      <option>Clínica Médica</option>
      <option>Pronto-Socorro</option>
      <option>Centro Cirúrgico</option>
    </select>
    <label>COREN</label>
    <input class="field" id="new-coren" placeholder="COREN-SP 000000">
    <div class="modal-actions">
      <button class="btn btn-light" onclick="closeModals()">Cancelar</button>
      <button class="btn" onclick="addProfessional()">Salvar cadastro</button>
    </div>
  </div>
</div>

<!-- MODAL SETOR -->

<div class="modal" id="sector-modal">
  <div class="modal-box">
    <h2>Novo setor</h2>
    <label>Nome do setor</label>
    <input class="field" id="sector-name" placeholder="Ex.: Pediatria">
    <label>Coordenador</label>
    <input class="field" id="sector-coordinator" placeholder="Nome do coordenador">
    <label>Descrição</label>
    <input class="field" id="sector-description" placeholder="Descrição do setor">
    <div class="modal-actions">
      <button class="btn btn-light" onclick="closeModals()">Cancelar</button>
      <button class="btn" onclick="addSector()">Salvar setor</button>
    </div>
  </div>
</div>

<!-- MODAL AFASTAMENTO -->

<div class="modal" id="absence-modal">
  <div class="modal-box">
    <h2>Registrar ausência</h2>
    <label>Profissional</label>
    <input class="field" id="absence-name" placeholder="Nome do profissional">
    <label>Tipo</label>
    <select class="field" id="absence-type">
      <option>Férias</option>
      <option>Afastamento</option>
      <option>Licença</option>
      <option>Folga</option>
    </select>
    <label>Data inicial</label>
    <input class="field" type="date" id="absence-start">
    <label>Data final</label>
    <input class="field" type="date" id="absence-end">
    <div class="modal-actions">
      <button class="btn btn-light" onclick="closeModals()">Cancelar</button>
      <button class="btn" onclick="addAbsence()">Registrar</button>
    </div>
  </div>
</div>

<script src="script.js"></script>


</body>
</html>









##########################    <! -- style.css  -->   <! -- DOCUMENTO 2 -->    ##########################








@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600&display=swap');

:root {
  --blue: #0d4e83;
  --green-light: #e8efec;
  --background: #f8f6f2;
  --text: #1d2928;
  --muted: #7b8b88;
  --border: #e7e3dc;
  --white: #fff;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background: var(--background);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
}

button, input, select, textarea { font: inherit; }
button { cursor: pointer; }

h1, h2, h3, .brand, .serif {
  font-family: 'Playfair Display', serif;
  font-weight: 500;
}

.hidden { display: none !important; }

/* LOGIN */

.login {
  display: grid;
  grid-template-columns: 52% 48%;
  min-height: 100vh;
}

.login-left {
  background: var(--blue);
  color: white;
  padding: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand {
  font-size: 25px;
}

.login-message { max-width: 440px; }

.login-message small {
  color: #a9c9c1;
  letter-spacing: 2px;
  font-size: 10px;
  font-weight: bold;
}

.login-message h1 {
  font-size: 42px;
  line-height: 1.1;
  margin: 20px 0;
}

.login-message p {
  color: #c3d4d0;
  line-height: 1.7;
}

.login-right {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px;
}

.login-box { width: 100%; max-width: 430px; }

.eyebrow {
  color: #75928b;
  font-size: 10px;
  letter-spacing: 2px;
  font-weight: bold;
  text-transform: uppercase;
}

.login-box h2 {
  font-size: 29px;
  margin: 10px 0 5px;
}

.description {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
}

.role {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 14px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 14px;
  margin-top: 10px;
  cursor: pointer;
  transition: .2s;
}

.role.selected {
  background: var(--green-light);
  border: 1px solid var(--blue);
}

.role-icon {
  width: 38px;
  height: 38px;
  border-radius: 11px;
  display: grid;
  place-items: center;
  background: #f0eee9;
  color: var(--blue);
  font-size: 18px;
}

.role.selected .role-icon {
  background: var(--blue);
  color: white;
}

.role-info { flex: 1; }
.role-info strong { display: block; font-size: 13px; }
.role-info small { color: var(--muted); font-size: 11px; }

.check { color: var(--blue); }

.btn {
  background: var(--blue);
  color: white;
  border: 0;
  border-radius: 11px;
  padding: 13px 19px;
  font-size: 13px;
  font-weight: 600;
}

.btn:hover { opacity: .9; }

.btn-full { width: 100%; margin-top: 25px; }
.btn-light { background: var(--blue-light); color: var(--blue); }
.btn-small { padding: 9px 13px; }
.btn-danger { background: #a33b3b; }

/* SISTEMA */

#system { display: none; min-height: 100vh; }

.sidebar {
  width: 230px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: white;
  border-right: 1px solid var(--border);
  padding: 18px 12px;
  display: flex;
  flex-direction: column;
  z-index: 5;
}

.sidebar .brand {
  padding: 0 10px;
  font-size: 23px;
}

.brand-sub {
  font-size: 11px;
  color: var(--muted);
  padding: 0 10px;
  margin-top: 3px;
}

.menu { margin-top: 35px; }

.menu button {
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  text-align: left;
  border: 0;
  background: transparent;
  color: #667774;
  padding: 11px 12px;
  border-radius: 11px;
  margin-bottom: 3px;
  font-size: 13px;
}

.menu button:hover { background: #f3f5f2; }

.menu button.active {
  background: var(--blue);
  color: white;
}

.menu-icon { width: 19px; text-align: center; }

.user-box {
  margin-top: auto;
  background: #f4f2ee;
  border-radius: 13px;
  padding: 12px 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 12px;
}

.avatar {
  width: 35px;
  height: 35px;
  background: var(--blue);
  color: white;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 11px;
  flex-shrink: 0;
}

.user-box small { display: block; color: var(--muted); margin-top: 3px; }

.logout {
  border: 0;
  background: none;
  color: var(--muted);
  font-size: 18px;
}

main {
  margin-left: 230px;
  padding: 55px 5%;
  min-height: 100vh;
}

.top-hospital {
  position: fixed;
  top: 12px;
  right: 25px;
  color: var(--muted);
  font-size: 11px;
}

.page { display: none; max-width: 1120px; margin: auto; }
.page.active { display: block; }

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 35px;
}

.page-header h1 {
  font-size: 38px;
  margin: 8px 0 4px;
}

.page-header p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  max-width: 620px;
  margin: 0;
}

.grid-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 15px;
  padding: 21px;
  box-shadow: 0 2px 5px #00000005;
}

.stat-icon { color: #75958d; font-size: 20px; }
.stat-number { font-family: 'Playfair Display'; font-size: 34px; margin-top: 14px; }
.stat-label { font-size: 12px; color: var(--muted); }

.dashboard-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 18px;
  margin-top: 22px;
}

.card-title {
  font-size: 10px;
  letter-spacing: 1.5px;
  color: #75928b;
  font-weight: bold;
  margin-bottom: 18px;
}

.recent-title { font-size: 22px; margin-bottom: 5px; }
.muted { color: var(--muted); font-size: 12px; }

.progress {
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  position: relative;
}

.progress:before {
  content: '';
  height: 1px;
  background: var(--border);
  position: absolute;
  top: 8px;
  left: 8%;
  right: 8%;
}

.step { text-align: center; font-size: 10px; color: var(--muted); z-index: 1; width: 20%; }
.dot {
  background: var(--background);
  border: 2px solid var(--border);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin: 0 auto 12px;
}
.step.done .dot { background: var(--blue); border-color: var(--blue); }
.step.current .dot { border-color: var(--blue); background: white; }

/* LISTAS E TABELAS */

.list { display: grid; gap: 12px; }

.list-item {
  background: white;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 19px 22px;
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.item-main { flex: 1; min-width: 180px; }
.item-main strong { display: block; font-size: 14px; }
.item-main small { color: var(--muted); font-size: 11px; display: block; margin-top: 5px; }

.item-meta { min-width: 110px; font-size: 12px; }
.item-meta small { display: block; color: var(--muted); margin-bottom: 5px; }

.badge {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 10px;
  background: #f0eee9;
  color: #5d625f;
}

.badge.green { background: #e4f7ed; color: #16845c; }
.badge.orange { background: #fff1dc; color: #a96b16; }
.badge.red { background: #ffe9e9; color: #bd3c3c; }

.toolbar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.field {
  background: white;
  border: 1px solid #dedbd4;
  border-radius: 10px;
  padding: 11px 13px;
  outline: none;
  color: var(--text);
  font-size: 13px;
}

.field:focus { border-color: var(--blue); }
.toolbar .field { flex: 1; min-width: 150px; }

.sector-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 17px;
}

.sector-card h2 { font-size: 23px; margin: 0 0 8px; }
.sector-card p { font-size: 12px; color: var(--muted); }
.sector-turns {
  border-top: 1px solid var(--border);
  margin-top: 20px;
  padding-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  font-size: 12px;
}

.turn-tag {
  display: inline-block;
  background: #f0eee9;
  padding: 5px 8px;
  border-radius: 20px;
  font-size: 10px;
  margin: 5px 3px 0 0;
}

.timeline { padding-left: 15px; }
.event { border-left: 2px solid var(--border); padding: 0 0 26px 20px; position: relative; }
.event:before {
  content: '';
  position: absolute;
  left: -6px;
  top: 3px;
  background: var(--blue);
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.event strong { font-size: 13px; }
.event p { color: var(--muted); font-size: 12px; margin: 6px 0; }

/* MODAIS */

.modal {
  position: fixed;
  inset: 0;
  background: #0008;
  z-index: 20;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal.show { display: flex; }

.modal-box {
  width: 100%;
  max-width: 480px;
  background: white;
  border-radius: 17px;
  padding: 25px;
}

.modal-box h2 { margin-top: 0; font-size: 25px; }
.modal-box label { display: block; font-size: 12px; margin: 13px 0 6px; }
.modal-box input, .modal-box select, .modal-box textarea { width: 100%; }
.modal-actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px; }

@media(max-width: 850px) {
  .login { grid-template-columns: 1fr; }
  .login-left { min-height: 260px; }
  .login-message h1 { font-size: 30px; }
  .sidebar { width: 68px; }
  .sidebar .brand, .brand-sub, .menu button span:not(.menu-icon), .user-box div:not(.avatar), .logout { display: none; }
  .menu button { justify-content: center; padding: 13px 5px; }
  main { margin-left: 68px; padding: 55px 20px; }
  .grid-stats { grid-template-columns: repeat(2,1fr); }
  .dashboard-grid, .sector-grid { grid-template-columns: 1fr; }
  .page-header { align-items: flex-start; flex-direction: column; }
}


/* CONTROLE GLOBAL DE TEMA */
:root {
  --blue-light: #e8efec;
  --surface: #ffffff;
  --surface-soft: #f4f2ee;
  --field-bg: #ffffff;
  --avatar-bg: #e3ece8;
  --avatar-text: #24534d;
  color-scheme: light;
}

.theme-toggle {
  position: fixed;
  top: 18px;
  right: 22px;
  z-index: 50;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 13px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  color: var(--text);
  box-shadow: 0 3px 14px #00000012;
  font-size: 12px;
  font-weight: 600;
  transition: background .2s, color .2s, border-color .2s, transform .2s;
}
.theme-toggle:hover { transform: translateY(-1px); }
.theme-toggle-icon { font-size: 16px; line-height: 1; }

/* PALETA NOTURNA: azul-marinho, grafite e verde azulado */
:root[data-theme="dark"] {
  color-scheme: dark;
  --blue: #3b91a0;
  --blue-light: #203c43;
  --green-light: #203b3b;
  --background: #111a20;
  --text: #e7eff0;
  --muted: #a1b2b6;
  --border: #2b3b43;
  --white: #18252d;
  --surface: #1a2932;
  --surface-soft: #22323a;
  --field-bg: #17252d;
  --avatar-bg: #29464a;
  --avatar-text: #c2e2dc;
}

:root[data-theme="dark"] body { background: var(--background); color: var(--text); }
:root[data-theme="dark"] .login-left { background: #102d3d; }
:root[data-theme="dark"] .login-right { background: var(--background); }
:root[data-theme="dark"] .role,
:root[data-theme="dark"] .card,
:root[data-theme="dark"] .list-item,
:root[data-theme="dark"] .modal-box,
:root[data-theme="dark"] .sidebar,
:root[data-theme="dark"] .theme-toggle {
  background: var(--surface);
  color: var(--text);
  border-color: var(--border);
}
:root[data-theme="dark"] .role.selected {
  background: var(--green-light);
  border-color: var(--blue);
}
:root[data-theme="dark"] .role-icon { background: #263943; color: #a8d5d1; }
:root[data-theme="dark"] .role.selected .role-icon { background: var(--blue); color: #071b22; }
:root[data-theme="dark"] .menu button { color: #b3c2c5; }
:root[data-theme="dark"] .menu button:hover { background: #263840; }
:root[data-theme="dark"] .menu button.active { background: #276b79; color: #ffffff; }
:root[data-theme="dark"] .user-box { background: var(--surface-soft); }
:root[data-theme="dark"] .field,
:root[data-theme="dark"] input,
:root[data-theme="dark"] select,
:root[data-theme="dark"] textarea {
  background-color: var(--field-bg);
  color: var(--text);
  border-color: var(--border);
}
:root[data-theme="dark"] .field::placeholder,
:root[data-theme="dark"] input::placeholder,
:root[data-theme="dark"] textarea::placeholder { color: #82979d; }
:root[data-theme="dark"] .btn-light { background: #29434a; color: #d5e9e8; }
:root[data-theme="dark"] .badge { background: #2a3940; color: #d0dcde; }
:root[data-theme="dark"] .badge.green { background: #1d493d; color: #a9e5ca; }
:root[data-theme="dark"] .badge.orange { background: #514027; color: #f2d39a; }
:root[data-theme="dark"] .badge.red { background: #512d32; color: #ffc0c4; }
:root[data-theme="dark"] .turn-tag { background: #2a3d43; color: #d2e1e2; }
:root[data-theme="dark"] .step.current .dot { background: var(--surface); }
:root[data-theme="dark"] .modal { background: #050b0dcc; }
:root[data-theme="dark"] .avatar[style] {
  background: var(--avatar-bg) !important;
  color: var(--avatar-text) !important;
}
:root[data-theme="dark"] .stat-icon,
:root[data-theme="dark"] .card-title { color: #8fc3bd; }
:root[data-theme="dark"] .login-message small { color: #a9d2cb; }
:root[data-theme="dark"] .login-message p { color: #c0d5d7; }

body, .login-right, .sidebar, .card, .list-item, .role, .field,
.modal-box, .user-box, .theme-toggle {
  transition: background-color .22s ease, color .22s ease, border-color .22s ease;
}

@media (max-width: 850px) {
  .theme-toggle { top: 12px; right: 12px; width: 40px; height: 40px; justify-content: center; padding: 0; }
  .theme-toggle-label { display: none; }
}






#########################    <! -- script.js  -->   <! -- DOCUMENTO 3 -->    #################################




// DADOS DE EXEMPLO

let selectedRole = 'Coordenação geral';

let professionals = [
 ['Ana Beatriz Souza','Enfermeiro(a)','UTI Adulto','COREN-SP 240137'],
 ['Bianca Leal','Enfermeiro(a)','Pronto-Socorro','COREN-SP 260522'],
 ['Bruno Carvalho','Enfermeiro(a)','UTI Adulto','COREN-SP 240274'],
 ['Caio Fontes','Enfermeiro(a)','Clínica Médica','COREN-SP 244521'],
 ['Camila Rocha','Técnico(a)','UTI Adulto','COREN-SP 240411'],
 ['Diego Martins','Técnico(a)','UTI Adulto','COREN-SP 240548'],
 ['Débora Antunes','Enfermeiro(a)','Pronto-Socorro','COREN-SP 244658'],
 ['Eduarda Lopes','Técnico(a)','UTI Adulto','COREN-SP 240685']
];

let sectors = [
 {name:'Centro Cirúrgico', coordinator:'Tatiane Correia', description:'Cirurgias eletivas, 4 salas.', day:'1 ENF · 1 TEC', night:'Sem necessidade'},
 {name:'Clínica Médica', coordinator:'Larissa Monteiro', description:'Internação clínica adulta, 24 leitos.', day:'1 ENF · 1 TEC · 1 AUX', night:'1 ENF · 1 TEC'},
 {name:'Pronto-Socorro', coordinator:'Bianca Leal', description:'Atendimento de urgência e emergência 24h.', day:'1 ENF · 1 TEC', night:'1 ENF · 1 TEC'},
 {name:'UTI Adulto', coordinator:'Mateus Sampaio', description:'Unidade de Terapia Intensiva com 10 leitos.', day:'1 ENF · 2 TEC', night:'1 ENF · 1 TEC'}
];

let absences = [
 {name:'Marcelo Vieira', type:'Afastamento', start:'01/10/2026', end:'03/10/2026'},
 {name:'Camila Rocha', type:'Férias', start:'28/09/2026', end:'12/10/2026'}
];

let exchanges = [
 {sector:'Centro Cirúrgico', from:'Rodrigo Brito', to:'Aline Figueiredo', date1:'02/10 · Diurno', date2:'03/10 · Diurno', reason:'Estou viajando', status:'Pendente'}
];

let history = [
 ['Remanejamento excepcional registrado','Bruno Carvalho: UTI Adulto → Pronto-Socorro em 14 de out','01/10/2026 às 12:06'],
 ['Profissional inativado','Aline Figueiredo – histórico preservado','30/09/2026 às 23:57'],
 ['Troca de plantão solicitada','Rodrigo Brito → Aline Figueiredo','29/09/2026 às 12:19'],
 ['Escala gerada','Escala Clínica Médica – 05/10 a 11/10','29/09/2026 às 12:11'],
 ['Escala publicada','Escala 28/09 a 04/10 – Disponibilizada aos profissionais','27/09/2026 às 12:24']
];

let escalaData = [
 {name:'Escala Clínica Médica – 05/10 a 11/10', detail:'Clínica Médica · 05 de out – 11 de out 2026 · versão 1 · por Larissa Monteiro', shifts:35, status:'Rascunho'},
 {name:'Escala 28/09 a 04/10', detail:'Todos os setores · 28 de set – 04 de out 2026 · versão 1 · por Enf. Helena Duarte', shifts:108, status:'Publicada'},
 {name:'Escala de Outubro', detail:'Todos os setores · 28 de set – 11 de out 2026 · versão 1 · por Enf. Helena Duarte', shifts:216, status:'Rascunho'}
];

// LOGIN

function selectRole(element,role) {
 selectedRole = role;
 document.querySelectorAll('.role').forEach(el => {
   el.classList.remove('selected');
   el.querySelector('.check').textContent = '';
 });
 element.classList.add('selected');
 element.querySelector('.check').textContent = '✓';
 document.getElementById('person-select').classList.toggle('hidden',role === 'Coordenação geral');
}

function enterSystem() {
 if(selectedRole !== 'Coordenação geral' && !document.getElementById('person').value) {
   alert('Selecione um profissional para continuar.');
   return;
 }

 const person = selectedRole === 'Coordenação geral'
   ? 'Coordenação geral'
   : document.getElementById('person').value;

 document.getElementById('login').style.display = 'none';
 document.getElementById('system').style.display = 'block';
 document.getElementById('user-name').textContent = person;
 document.getElementById('user-role').textContent = selectedRole;

 document.querySelector('#dashboard h1').textContent = 'Olá, ' + person;

 renderAll();
}

function logout() {
 document.getElementById('system').style.display = 'none';
 document.getElementById('login').style.display = 'grid';
}

// NAVEGAÇÃO

function showPage(id,button) {
 document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
 document.getElementById(id).classList.add('active');
 document.querySelectorAll('.menu button').forEach(b => b.classList.remove('active'));
 if(button) button.classList.add('active');
}

// ESCALAS

function renderEscalas(filter='Todas') {
 const list = document.getElementById('escala-list');
 list.innerHTML = '';

 escalaData.filter(e => filter === 'Todas' || e.status === filter).forEach((e,i) => {
  list.innerHTML += `
   <div class="list-item">
    <div class="item-main">
      <strong>${e.name}</strong>
      <small>${e.detail}</small>
    </div>
    <div class="item-meta">${e.shifts} plantões</div>
    <span class="badge ${e.status === 'Publicada' ? 'green' : ''}">● ${e.status}</span>
    <button class="btn btn-light btn-small" onclick="changeEscala(${i})">Abrir →</button>
   </div>`;
 });
}

function filterEscalas(value) { renderEscalas(value); }

function changeEscala(i) {
 const e = escalaData[i];
 const next = e.status === 'Rascunho' ? 'Publicada' : 'Rascunho';
 if(confirm('Deseja alterar o status desta escala para ' + next + '?')) {
   e.status = next;
   renderEscalas();
   history.unshift(['Status da escala alterado',e.name + ' – ' + next,'Agora']);
   renderHistory();
   alert('Status atualizado no protótipo!');
 }
}

// PROFISSIONAIS

function renderProfessionals() {
 const search = document.getElementById('search-prof').value.toLowerCase();
 const sector = document.getElementById('filter-sector').value;
 const list = document.getElementById('professional-list');
 list.innerHTML = '';

 const filtered = professionals.filter(p =>
   (p[0].toLowerCase().includes(search) || p[3].toLowerCase().includes(search)) &&
   (!sector || p[2] === sector)
 );

 document.getElementById('prof-count').textContent = filtered.length + ' profissionais';

 filtered.forEach(p => {
  const initials = p[0].split(' ').map(x=>x[0]).slice(0,2).join('');
  list.innerHTML += `
   <div class="list-item">
    <div class="avatar" style="background:#e3ece8;color:#24534d">${initials}</div>
    <div class="item-main"><strong>${p[0]}</strong><small>${p[1]}</small></div>
    <div class="item-meta"><small>Setor</small>${p[2]}</div>
    <div class="item-meta"><small>COREN</small>${p[3]} <span style="color:#16845c">· Ativo</span></div>
    <div class="item-meta"><small>Jornada</small>12x36 · diurno</div>
    <button class="btn btn-light btn-small" onclick="editProfessional('${p[0]}')">Editar</button>
   </div>`;
 });
}

function addProfessional() {
 const name = document.getElementById('new-name').value.trim();
 if(!name) return alert('Informe o nome.');

 professionals.push([
   name,
   document.getElementById('new-position').value,
   document.getElementById('new-sector').value,
   document.getElementById('new-coren').value || 'Não informado'
 ]);

 closeModals();
 document.getElementById('new-name').value = '';
 renderProfessionals();
 document.getElementById('total-prof').textContent = professionals.length;
 history.unshift(['Novo profissional cadastrado',name,'Agora']);
 alert('Profissional cadastrado!');
}

function editProfessional(name) {
 const p = professionals.find(x=>x[0] === name);
 const newName = prompt('Editar nome do profissional:',p[0]);
 if(newName && newName.trim()) {
   p[0] = newName.trim();
   renderProfessionals();
 }
}

// SETORES

function renderSectors() {
 const list = document.getElementById('sector-list');
 list.innerHTML = '';

 sectors.forEach((s,i) => {
  list.innerHTML += `
   <div class="card sector-card">
    <div style="display:flex;justify-content:space-between">
      <h2>${s.name}</h2>
      <button class="btn btn-light btn-small" onclick="editSector(${i})">✎</button>
    </div>
    <div class="muted">♙ ${s.coordinator} · ${professionals.filter(p=>p[2]===s.name).length} profissionais</div>
    <p>${s.description}</p>
    <span class="badge">Setor de enfermagem</span>
    <div class="sector-turns">
      <div>☀ Diurno<br><span class="turn-tag">${s.day}</span></div>
      <div>☾ Noturno<br><span class="turn-tag">${s.night}</span></div>
    </div>
   </div>`;
 });
}

function addSector() {
 const name = document.getElementById('sector-name').value.trim();
 if(!name) return alert('Informe o nome do setor.');

 sectors.push({
  name,
  coordinator:document.getElementById('sector-coordinator').value || 'Não definido',
  description:document.getElementById('sector-description').value || 'Setor cadastrado.',
  day:'1 ENF · 1 TEC',
  night:'1 ENF · 1 TEC'
 });

 closeModals();
 renderSectors();
 document.getElementById('total-setor').textContent = sectors.length;
 alert('Setor cadastrado!');
}

function editSector(i) {
 const name = prompt('Nome do setor:',sectors[i].name);
 if(name && name.trim()) {
  sectors[i].name = name.trim();
  renderSectors();
 }
}

// AFASTAMENTOS

function renderAbsences() {
 const list = document.getElementById('absence-list');
 list.innerHTML = '';

 absences.forEach((a,i) => {
  list.innerHTML += `
   <div class="list-item">
    <div class="avatar" style="background:#e3ece8;color:#24534d">${a.name.split(' ').map(x=>x[0]).slice(0,2).join('')}</div>
    <div class="item-main"><strong>${a.name}</strong><small>${a.type}</small></div>
    <span class="badge">${a.type}</span>
    <div class="item-meta">${a.start} – ${a.end}</div>
    <button class="btn btn-light btn-small" onclick="removeAbsence(${i})">Excluir</button>
   </div>`;
 });
}

function addAbsence() {
 const name = document.getElementById('absence-name').value.trim();
 const start = document.getElementById('absence-start').value;
 const end = document.getElementById('absence-end').value;
 if(!name || !start || !end) return alert('Preencha todos os campos.');
 if(end < start) return alert('A data final não pode ser anterior à inicial.');

 absences.push({
  name,
  type:document.getElementById('absence-type').value,
  start:start.split('-').reverse().join('/'),
  end:end.split('-').reverse().join('/')
 });
 closeModals();
 renderAbsences();
 alert('Registro realizado!');
}

function removeAbsence(i) {
 if(confirm('Deseja excluir este registro?')) {
  absences.splice(i,1);
  renderAbsences();
 }
}

// TROCAS

function renderExchanges(filter='Pendente') {
 const list = document.getElementById('exchange-list');
 list.innerHTML = '';

 const filtered = exchanges.filter(e=>filter==='Todos'||e.status===filter);

 if(!filtered.length) {
  list.innerHTML = '<div class="card muted">Nenhuma solicitação encontrada.</div>';
 }

 filtered.forEach((e,i) => {
  list.innerHTML += `
   <div class="card">
    <div style="display:flex;justify-content:space-between;gap:10px">
     <span class="muted">${e.sector} · Solicitação de troca</span>
     <span class="badge ${e.status==='Aprovada'?'green':e.status==='Recusada'?'red':'orange'}">${e.status}</span>
    </div>
    <div style="display:flex;align-items:center;gap:25px;margin:20px 0;flex-wrap:wrap">
     <div><strong>${e.from}</strong><div class="muted">${e.date1}</div></div>
     <span style="font-size:22px;color:var(--green)">⇄</span>
     <div><strong>${e.to}</strong><div class="muted">${e.date2}</div></div>
    </div>
    <p class="muted">"${e.reason}"</p>
    ${e.status==='Pendente' ? `
     <div style="display:flex;gap:10px;margin-top:15px">
      <button class="btn btn-small" onclick="approveExchange(${i})">Aprovar</button>
      <button class="btn btn-danger btn-small" onclick="rejectExchange(${i})">Recusar</button>
     </div>` : ''}
   </div>`;
 });
}

function approveExchange(i) {
 exchanges[i].status = 'Aprovada';
 history.unshift(['Troca de plantão aprovada',exchanges[i].from+' → '+exchanges[i].to,'Agora']);
 renderExchanges('Pendente');
 document.getElementById('total-trocas').textContent = exchanges.filter(e=>e.status==='Pendente').length;
 alert('Troca aprovada!');
}

function rejectExchange(i) {
 exchanges[i].status = 'Recusada';
 history.unshift(['Troca de plantão recusada',exchanges[i].from+' → '+exchanges[i].to,'Agora']);
 renderExchanges('Pendente');
 document.getElementById('total-trocas').textContent = exchanges.filter(e=>e.status==='Pendente').length;
 alert('Troca recusada!');
}

// HISTÓRICO

function renderHistory() {
 const search = document.getElementById('search-history').value.toLowerCase();
 const list = document.getElementById('history-list');
 list.innerHTML = '';

 history.filter(h=>h.join(' ').toLowerCase().includes(search)).forEach(h => {
  list.innerHTML += `
   <div class="event">
    <strong>${h[0]}</strong>
    <p>${h[1]}</p>
    <small class="muted">${h[2]}</small>
   </div>`;
 });
}

// MODAIS

function openModal(id) {
 document.getElementById(id).classList.add('show');
}

function closeModals() {
 document.querySelectorAll('.modal').forEach(m=>m.classList.remove('show'));
}

document.querySelectorAll('.modal').forEach(modal=>{
 modal.addEventListener('click',e=>{
  if(e.target===modal) closeModals();
 });
});

// INICIALIZAÇÃO

function renderAll() {
 renderEscalas();
 renderProfessionals();
 renderSectors();
 renderAbsences();
 renderExchanges();
 renderHistory();
 document.getElementById('total-trocas').textContent =
   exchanges.filter(e=>e.status==='Pendente').length;
}

// TEMA CLARO / ESCURO
function applyTheme(theme) {
 const isDark = theme === 'dark';
 document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
 const toggle = document.getElementById('theme-toggle');
 if (toggle) {
  toggle.setAttribute('aria-pressed', String(isDark));
  toggle.setAttribute('aria-label', isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
  toggle.querySelector('.theme-toggle-icon').textContent = isDark ? '☀' : '☾';
  toggle.querySelector('.theme-toggle-label').textContent = isDark ? 'Tema claro' : 'Tema escuro';
 }
}

function toggleTheme() {
 const current = document.documentElement.getAttribute('data-theme') || 'light';
 const next = current === 'dark' ? 'light' : 'dark';
 applyTheme(next);
 try { localStorage.setItem('plantao-theme', next); } catch (error) {
  // O tema permanece ativo nesta sessão mesmo sem armazenamento disponível.
 }
}

(function initTheme() {
 let savedTheme = 'light';
 try { savedTheme = localStorage.getItem('plantao-theme') || 'light'; } catch (error) {}
 applyTheme(savedTheme);
})();




