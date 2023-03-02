const supabaseUrl = 'https://gaydfeqcfpugfzlaxyse.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdheWRmZXFjZnB1Z2Z6bGF4eXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3ODAxMTcsImV4cCI6MTk5MzM1NjExN30.QqPD3kxOoT0eGl-c0DcQyvdAIXa7RAZ9-9vb5x9Nqu4';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const turid = document.querySelector('#Turid').value;
  const dato = document.querySelector('#dato').value;
  const ankomsttid = document.querySelector('#ankomsttid').value;
  const lossestart = document.querySelector('#lossestart').value;
  const losseferdig = document.querySelector('#losseferdig').value;
  const kommentar = document.querySelector('#kommentar').value;

  try {
    const { data, error } = await supabase
      .from('lossetider')
      .insert({ turid, dato, ankomsttid, lossestart, losseferdig, kommentar });

    if (error) {
      throw error;
    }

    console.log(data);
    alert('Data er lagt til i databasen!');
  } catch (error) {
    console.error(error);
    alert('En feil oppstod. Vennligst prøv igjen.');
  }
});

