..DOCUMENTAÇÃO PROJETO GERAÇÃO TECH 2.0

### PROJETO GERAÇÃO TECH 2.0

> > CHAT DE DESENVOLVEDORES QUE PARTICIPARAM DO GERAÇÃO TECH 2.0

> > TELA DE LOGIN E CADASTRO ATRAVÉS DE CERITIFAÇÃO DE PARTICIPAÇÃO NO PROJETO
> > TELA DE CARDS COM TODAS AS SALAS POR LINGUAGENS
> > DASHBOARD PARA ALUNOS E UM DASHBOARD PARA OS PROFESSORES E ADMS...

## DESIGN

-- Tela de Login e Cadastro responsiva com cores já setadas no root do projeto.
-- Tela de cards com todas as linguagens...

## FRONT-END Thiago, Julia and José

-- Trabalhar em todo o código front estabelicido no design do Ivan

## BACKEND - Jully, Rafael

-- Trabalhar em todo o código BackEnd estabelecido no projeto, juntamente com o front-end...

## DOCUMENTAÇÃO BANCO DE DADOS SE FOR PELO SUPABASE

--

Estrutura de Banco de Dados para Chat no Supabase
Vou te ajudar a criar uma estrutura eficiente para um chat com salas temáticas no Supabase. Aqui está como você pode organizar as tabelas e políticas de segurança:

1. Tabelas Necessárias
   a. users (já existe por padrão no Supabase Auth)
   Esta tabela é gerenciada automaticamente pelo sistema de autenticação do Supabase

Contém informações básicas dos usuários (id, email, etc.)

b. rooms (Salas temáticas)
sql
create table rooms (
id uuid primary key default uuid_generate_v4(),
name text not null unique, -- Ex: "JavaScript", "React", "HTML"
description text,
created_at timestamp with time zone default now(),
created_by uuid references auth.users(id) not null
);
c. messages (Mensagens do chat)
sql
create table messages (
id uuid primary key default uuid_generate_v4(),
room_id uuid references rooms(id) not null,
user_id uuid references auth.users(id) not null,
content text not null,
created_at timestamp with time zone default now()
);
d. user_rooms (Relacionamento usuários-salas para controle de acesso)
sql
create table user_rooms (
user_id uuid references auth.users(id) not null,
room_id uuid references rooms(id) not null,
joined_at timestamp with time zone default now(),
primary key (user_id, room_id)
); 2. Políticas de Segurança (RLS - Row Level Security)
a. Para a tabela rooms:
sql
-- Habilitar RLS
alter table rooms enable row level security;

-- Políticas:
create policy "Todos podem ver as salas públicas"
on rooms for select
using (true);

create policy "Administradores podem criar salas"
on rooms for insert
to authenticated
with check (auth.uid() = created_by);

create policy "Administradores podem atualizar suas salas"
on rooms for update
using (auth.uid() = created_by);

create policy "Administradores podem deletar suas salas"
on rooms for delete
using (auth.uid() = created_by);
b. Para a tabela messages:
sql
-- Habilitar RLS
alter table messages enable row level security;

-- Políticas:
create policy "Usuários podem ver mensagens de salas que participam"
on messages for select
using (
exists (
select 1 from user_rooms
where user_rooms.user_id = auth.uid()
and user_rooms.room_id = messages.room_id
)
);

create policy "Usuários autenticados podem enviar mensagens em salas que participam"
on messages for insert
to authenticated
with check (
exists (
select 1 from user_rooms
where user_rooms.user_id = auth.uid()
and user_rooms.room_id = messages.room_id
)
and user_id = auth.uid()
);

create policy "Usuários podem editar apenas suas próprias mensagens"
on messages for update
using (user_id = auth.uid());

create policy "Usuários podem deletar apenas suas próprias mensagens"
on messages for delete
using (user_id = auth.uid());
c. Para a tabela user_rooms:
sql
-- Habilitar RLS
alter table user_rooms enable row level security;

-- Políticas:
create policy "Usuários podem ver suas próprias associações a salas"
on user_rooms for select
using (user_id = auth.uid());

create policy "Usuários podem entrar em salas públicas"
on user_rooms for insert
to authenticated
with check (user_id = auth.uid());

create policy "Usuários podem sair de salas"
on user_rooms for delete
using (user_id = auth.uid()); 3. Índices para Melhor Performance
sql
create index idx_messages_room_id on messages(room_id);
create index idx_messages_created_at on messages(created_at);
create index idx_user_rooms_user_id on user_rooms(user_id);
create index idx_user_rooms_room_id on user_rooms(room_id); 4. Funções Úteis (opcionais)
a. Verificar se usuário está em uma sala:
sql
create or replace function is_user_in_room(room_id uuid)
returns boolean as $$
select exists (
select 1 from user_rooms
where user_id = auth.uid()
and user_rooms.room_id = is_user_in_room.room_id
);

$$
language sql security definer;
b. Obter salas do usuário:
sql
create or replace function get_user_rooms()
returns table (
  id uuid,
  name text,
  description text,
  created_at timestamp with time zone
) as
$$

select r.id, r.name, r.description, r.created_at
from rooms r
join user_rooms ur on r.id = ur.room_id
where ur.user_id = auth.uid();

$$
language sql security definer;
5. Como Usar na Aplicação
Listar salas disponíveis:

javascript
const { data: rooms, error } = await supabase
  .from('rooms')
  .select('*');
Entrar em uma sala:

javascript
const { error } = await supabase
  .from('user_rooms')
  .insert({ room_id: roomId });
Enviar mensagem:

javascript
const { error } = await supabase
  .from('messages')
  .insert({
    room_id: roomId,
    content: messageText
  });
Receber mensagens em tempo real:

javascript
const subscription = supabase
  .from('messages')
  .on('INSERT', payload => {
    console.log('Nova mensagem:', payload.new);
  })
  .subscribe();
Considerações Finais
Esta estrutura permite múltiplas salas temáticas

Apenas usuários autenticados podem interagir

Os usuários precisam entrar em uma sala antes de ver/enviar mensagens

As mensagens são persistidas e associadas às salas

Você pode expandir com recursos como:

Moderadores de sala

Mensagens fixadas

Histórico de mensagens paginado

Notificações
$$
