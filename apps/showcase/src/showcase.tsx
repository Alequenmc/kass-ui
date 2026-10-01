import { useState } from "react";
import {
  Accordion, AlertDialog, Badge, Button, Card, Checkbox, Dialog, DropdownMenu,
  Input, Label, Popover, Select, Separator, Skeleton, Spinner, Switch, Tabs,
  Textarea, Tooltip,
} from "@kass-ui/library";

const components = [
  ["Button", "Acciones y estados"], ["Input", "Campos de texto"], ["Select", "Opciones"],
  ["Checkbox", "Selección múltiple"], ["Switch", "Preferencias"], ["Dialog", "Ventanas modales"],
  ["Popover", "Contenido contextual"], ["Tooltip", "Ayuda breve"], ["Tabs", "Navegación"],
  ["Accordion", "Contenido desplegable"], ["Badge", "Etiquetas"], ["Card", "Contenedores"],
  ["Textarea", "Texto largo"], ["Dropdown", "Menús de acción"], ["Feedback", "Carga y estados"],
] as const;

function App() {
  const [dark, setDark] = useState(false);
  const [saved, setSaved] = useState(false);
  const [query, setQuery] = useState("");
  const visible = components.filter(([name]) => `${name} ${name === "Feedback" ? "Skeleton Spinner" : ""}`.toLowerCase().includes(query.toLowerCase()));
  const count = visible.reduce((total, [name]) => total + (name === "Feedback" ? 3 : 1), 0);

  return (
    <div className={`showcase ${dark ? "showcase--dark" : ""}`}>
      <aside className="sidebar">
        <a className="brand" href="#top"><span className="brand-mark">k.</span><span>Kass UI<small>COMPONENT LIBRARY</small></span></a>
        <div className="sidebar-caption">EXPLORAR</div>
        <a className="nav-link nav-link--active" href="#top"><span>◈</span> Componentes <span className="nav-count">18</span></a>
        <a className="nav-link" href="#form"><span>▤</span> Formulario</a>
        <a className="nav-link" href="#overlays"><span>▧</span> Overlays</a>
        <a className="nav-link" href="#feedback"><span>◌</span> Estados</a>
        <div className="sidebar-bottom"><div className="avatar">K</div><div><b>Kass UI</b><small>Versión 0.1.0</small></div><span className="online-dot" /></div>
      </aside>

      <main id="top" className="main-content">
        <header className="topbar"><div className="breadcrumbs">Kass UI <span>/</span> <b>Componentes</b></div><div className="top-actions"><span className="version-pill">v0.1.0</span><button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Cambiar tema">{dark ? "☼" : "◐"}</button><a className="github-link" href="https://github.com/Alequenmc/kass-ui" target="_blank" rel="noreferrer">GitHub ↗</a></div></header>

        <section className="intro"><div className="eyebrow"><span className="eyebrow-dot" /> COMPONENTES PARA REACT</div><h1>Construye con <span>intención.</span></h1><p>Componentes accesibles, composables y listos para usar.<br />Explora cada pieza y pruébala aquí mismo.</p><div className="intro-meta"><span>✳ &nbsp;18 componentes</span><i /> <span>⌘ &nbsp;React + TypeScript</span><i /> <span>◉ &nbsp;Accesibles</span></div></section>

        <div className="toolbar"><div className="section-label">CATÁLOGO <span>{count}</span></div><label className="search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar componente..." /><kbd>⌘ K</kbd></label></div>

        <div className="catalog-grid">
          {visible.map(([name, description]) => <a className="catalog-item" href={`#${name.toLowerCase()}`} key={name}><span className="catalog-icon">{iconFor(name)}</span><span><b>{name}</b><small>{description}</small></span><span className="catalog-arrow">↗</span></a>)}
          {visible.length === 0 && <p className="empty-search">No encontramos componentes con “{query}”.</p>}
        </div>

        <section className="component-section" id="button"><div className="component-heading"><div><span className="component-index">01</span><h2>Button</h2><p>Acciones para que tus usuarios avancen.</p></div><span className="stable-tag">● &nbsp;ESTABLE</span></div><Card className="demo-card"><Card.Content><div className="button-showcase"><div className="button-row"><Button variant="primary">Crear proyecto <span>↗</span></Button><Button variant="secondary">Secundario</Button><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button><Button variant="destructive">Eliminar</Button></div><Separator /><div className="button-row"><Button size="sm">Pequeño</Button><Button size="md">Mediano</Button><Button size="lg">Grande</Button><Button loading>Guardando</Button><Button disabled>Deshabilitado</Button></div></div></Card.Content></Card></section>

        <section className="component-section" id="form"><div className="component-heading"><div><span className="component-index">02</span><h2>Formulario</h2><p>Campos claros que hacen fácil completar cada tarea.</p></div><span className="stable-tag">● &nbsp;ESTABLE</span></div><Card className="demo-card"><Card.Content><div className="form-grid"><div className="field"><Label htmlFor="demo-name" required>Nombre del proyecto</Label><Input id="demo-name" placeholder="Ej. Mi nuevo proyecto" /></div><div className="field"><Label htmlFor="demo-category">Categoría</Label><Select defaultValue="design"><Select.Trigger id="demo-category"><Select.Value /></Select.Trigger><Select.Content><Select.Item value="design">Diseño</Select.Item><Select.Item value="development">Desarrollo</Select.Item><Select.Item value="marketing">Marketing</Select.Item></Select.Content></Select></div><div className="field field--wide"><Label htmlFor="demo-description">Descripción</Label><Textarea id="demo-description" placeholder="¿De qué trata tu proyecto?" rows={3} /></div><div className="field field--wide"><Checkbox label="Quiero recibir novedades sobre Kass UI" defaultChecked /></div><div className="form-footer"><span>Los campos con <em>*</em> son obligatorios.</span><Button variant="primary" onClick={() => setSaved(true)}>{saved ? "✓ Guardado" : "Guardar proyecto"}</Button></div></div></Card.Content></Card></section>

        <section className="component-section" id="overlays"><div className="component-heading"><div><span className="component-index">03</span><h2>Overlays</h2><p>Capas contextuales para acciones, detalles y ayuda.</p></div><span className="stable-tag">● &nbsp;ESTABLE</span></div><Card className="demo-card"><Card.Content><div className="overlay-row"><Dialog><Dialog.Trigger asChild><Button variant="outline">Abrir diálogo</Button></Dialog.Trigger><Dialog.Content><Dialog.Header><Dialog.Title>¿Todo listo?</Dialog.Title><Dialog.Description>Tu proyecto ya tiene lo necesario para empezar.</Dialog.Description></Dialog.Header><Dialog.Footer><Dialog.Close asChild><Button variant="ghost">Ahora no</Button></Dialog.Close><Dialog.Close asChild><Button variant="primary">¡Empezar!</Button></Dialog.Close></Dialog.Footer></Dialog.Content></Dialog><AlertDialog><AlertDialog.Trigger asChild><Button variant="destructive">Eliminar elemento</Button></AlertDialog.Trigger><AlertDialog.Content><AlertDialog.Header><AlertDialog.Title>¿Eliminar este elemento?</AlertDialog.Title><AlertDialog.Description>Esta acción no se puede deshacer.</AlertDialog.Description></AlertDialog.Header><AlertDialog.Footer><AlertDialog.Cancel asChild><Button variant="outline">Cancelar</Button></AlertDialog.Cancel><AlertDialog.Action asChild><Button variant="destructive">Eliminar</Button></AlertDialog.Action></AlertDialog.Footer></AlertDialog.Content></AlertDialog><Popover><Popover.Trigger asChild><Button variant="outline">Mostrar popover</Button></Popover.Trigger><Popover.Content className="demo-popover"><b>Un poco de contexto</b><p>Los popovers pueden contener controles y contenido interactivo.</p></Popover.Content></Popover><DropdownMenu><DropdownMenu.Trigger asChild><Button variant="outline">Más acciones &nbsp;⌄</Button></DropdownMenu.Trigger><DropdownMenu.Content><DropdownMenu.Label>ACCIONES</DropdownMenu.Label><DropdownMenu.Item>Editar proyecto</DropdownMenu.Item><DropdownMenu.Item>Duplicar</DropdownMenu.Item><DropdownMenu.Separator /><DropdownMenu.Item destructive>Eliminar</DropdownMenu.Item></DropdownMenu.Content></DropdownMenu><Tooltip.Provider><Tooltip><Tooltip.Trigger asChild><Button variant="ghost">Pasa el cursor aquí ⓘ</Button></Tooltip.Trigger><Tooltip.Content>Una descripción breve y útil.</Tooltip.Content></Tooltip></Tooltip.Provider></div></Card.Content></Card></section>

        <section className="component-section" id="tabs"><div className="component-heading"><div><span className="component-index">04</span><h2>Tabs &amp; Accordion</h2><p>Organiza y revela contenido cuando hace falta.</p></div><span className="stable-tag">● &nbsp;ESTABLE</span></div><Card className="demo-card"><Card.Content><Tabs defaultValue="overview"><Tabs.List><Tabs.Trigger value="overview">Resumen</Tabs.Trigger><Tabs.Trigger value="activity">Actividad</Tabs.Trigger><Tabs.Trigger value="settings">Configuración</Tabs.Trigger></Tabs.List><Tabs.Content value="overview"><div className="tab-panel"><b>Un espacio para tus ideas.</b><p>Organiza tu trabajo con componentes simples y flexibles.</p></div></Tabs.Content><Tabs.Content value="activity"><div className="tab-panel"><b>Actividad reciente</b><p>Tu equipo todavía no tiene actividad nueva.</p></div></Tabs.Content><Tabs.Content value="settings"><div className="tab-panel"><b>Preferencias</b><p>Ajusta el espacio a tu forma de trabajar.</p></div></Tabs.Content></Tabs><Separator className="demo-separator" /><Accordion type="single" collapsible><Accordion.Item value="answer"><Accordion.Trigger>¿Los componentes son accesibles?</Accordion.Trigger><Accordion.Content>Sí. Kass UI usa controles semánticos y Radix UI para accesibilidad y navegación por teclado.</Accordion.Content></Accordion.Item><Accordion.Item value="customize"><Accordion.Trigger>¿Puedo personalizar los estilos?</Accordion.Trigger><Accordion.Content>Sí. Puedes usar las clases CSS y los tokens de diseño de Kass UI para adaptar la apariencia.</Accordion.Content></Accordion.Item></Accordion></Card.Content></Card></section>

        <section className="component-section" id="badge"><div className="component-heading"><div><span className="component-index">05</span><h2>Badges &amp; feedback</h2><p>Estados visibles y placeholders mientras carga tu contenido.</p></div><span className="stable-tag">● &nbsp;ESTABLE</span></div><Card className="demo-card"><Card.Content><div className="feedback-grid"><div><div className="mini-label">BADGES</div><div className="badge-row"><Badge variant="default">Default</Badge><Badge variant="primary">Nuevo</Badge><Badge variant="success">Publicado</Badge><Badge variant="warning">Pendiente</Badge><Badge variant="destructive">Error</Badge><Badge variant="outline">Borrador</Badge></div></div><div><div className="mini-label">SWITCH</div><Switch label="Notificaciones activadas" defaultChecked /></div><div id="feedback"><div className="mini-label">LOADING</div><div className="loading-row"><Spinner size="sm" /><span>Cargando resultados...</span></div><div className="skeleton-stack"><Skeleton height={12} width="76%" /><Skeleton height={12} width="53%" /></div></div></div></Card.Content></Card></section>

        <footer className="page-footer"><span className="brand-mark brand-mark--small">k.</span><span>Hecho con cuidado por Kass UI</span><span className="footer-dot">·</span><span>MIT License</span><a href="https://www.npmjs.com/package/kass-ui" target="_blank" rel="noreferrer">npm ↗</a></footer>
      </main>
    </div>
  );
}

function iconFor(name: string) {
  const icons: Record<string, string> = { Button: "↗", Input: "⌕", Select: "⌄", Checkbox: "☑", Switch: "◉", Dialog: "▣", Popover: "▱", Tooltip: "ⓘ", Tabs: "☷", Accordion: "☰", Badge: "◈", Card: "▤", Textarea: "▧", Dropdown: "⋯", Feedback: "◌" };
  return icons[name] ?? "◇";
}

export default App;
