# Nx serverless demo

Repositorio generado a modo de demostración para la presentación realizada por Santiago Foster y William Salazar el día 23 de Noviembre para la comunidad de Accenture HSA.

[Documentación de NX](https://nx.dev/l/n/getting-started/intro)

## Pre-requisitos 
- Instalar npm -> **5.2.0** o superior
- Instalar node LTS
- npm install serverless -g
- npm install serverless-offline -g
- npm install nx -g
- npm i npx 
- npm install
  
## Creación de workspace NX 
- npx create-nx-workspace

## Proyectos configurados
workspace.json contiene la configuración de los proyectos existentes en el monorepo.
- Proyectos actuales:
  - serverless-wolox-wolox
  - utils
  - wolox-express-demo-nx

## Generators base usados para esta demo
- nx generate @nrwl/node:library [library_name]
- nx generate @nrwl/express:application [express_app_name]

## Ejemplo de Generators personalizados
Crea estructura básica de proyecto con serverless
- Path: 
  - tools/generators/serverless
- Ejecutar generator para un nuevo proyecto:
  - nx **workspace-generator** serverless [app_name]

## Executors personalizados
Muestra la string especificada en el workspace.json->project->target->executor
- Path:
  - tools/executors/show
- Compilar implementación
  - npx tsc tools/executors/show/impl
- Ejecutar executor para un proyecto:
  - nx **show** [project_name]

## Ejecutar un proyecto
- nx **serve** [project_name]
## Ejecutar test de un proyecto
- nx **test** [project_name]

## Ejecutar todos los test en el monorepo
- npm test
