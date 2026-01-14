if(!localStorage.getItem("alunos")) localStorage.setItem("alunos", JSON.stringify([]));
if(!localStorage.getItem("pagamentos")) localStorage.setItem("pagamentos", JSON.stringify([]));
if(!localStorage.getItem("despesas")) localStorage.setItem("despesas", JSON.stringify([]));

function salvarAluno(aluno){ const alunos = JSON.parse(localStorage.getItem("alunos")); alunos.push(aluno); localStorage.setItem("alunos", JSON.stringify(alunos)); }
function listarAlunos(){ return JSON.parse(localStorage.getItem("alunos")); }
function salvarPagamento(p){ const ps = JSON.parse(localStorage.getItem("pagamentos")); ps.push(p); localStorage.setItem("pagamentos", JSON.stringify(ps)); }
function listarPagamentos(){ return JSON.parse(localStorage.getItem("pagamentos")); }
function salvarDespesa(d){ const ds = JSON.parse(localStorage.getItem("despesas")); ds.push(d); localStorage.setItem("despesas", JSON.stringify(ds)); }
function listarDespesas(){ return JSON.parse(localStorage.getItem("despesas")); }