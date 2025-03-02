import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'details/:name/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'chackout/:id',
    renderMode: RenderMode.Client
  },
];
