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
