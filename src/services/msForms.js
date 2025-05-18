export function generateMsFormsUrl(project) {
  const base = 'https://forms.microsoft.com/Pages/ResponsePage.aspx?id=YOUR_FORM_ID';
  const params = new URLSearchParams({
    betreff: project.betreff,
    name: project.name,
    datum: project.datum,
  });
  return `${base}&${params.toString()}`;
} 