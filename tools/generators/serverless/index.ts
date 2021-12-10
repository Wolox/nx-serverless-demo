import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  names,
  Tree,
} from '@nrwl/devkit';

export default async function (tree: Tree, schema: any) {
  const targetPath = 'apps/';
  const templatePath = 'tools/generators/serverless/templates';

  const substitutions = names(schema.name);

  generateFiles(tree, templatePath, targetPath, substitutions);

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
