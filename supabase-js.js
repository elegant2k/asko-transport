const supabaseUrl = 'https://gaydfeqcfpugfzlaxyse.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdheWRmZXFjZnB1Z2Z6bGF4eXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3ODAxMTcsImV4cCI6MTk5MzM1NjExN30.QqPD3kxOoT0eGl-c0DcQyvdAIXa7RAZ9-9vb5x9Nqu4';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);


const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const Turid = parseInt(document.querySelector('#Turid').value);
  const dato = document.querySelector('#dato').value;
  const ankomsttid = document.querySelector('#ankomsttid').value;
  const lossestart = document.querySelector('#lossestart').value;
  const losseferdig = document.querySelector('#losseferdig').value;
  const kommentar = document.querySelector('#kommentar').value;

  const { data, error } = await supabase.from('lossingstider').insert([
    { Turid, dato, ankomsttid, lossestart, losseferdig, kommentar }
  ]);

  if (error) {
    console.log('Feil ved innsetting av data:', error.message);
  } else {
    console.log('Data er lagret:', data);
    form.reset();
  }
});
