const playlist = {
  artistName: 'songTitle'
};

function updatePlaylist(playlist, artistName, songTitle) {
   playlist[artistName]= 'songTitle'; 
  return updatePlaylist;
}

function removeFromPlaylist(playlist,artistName) {
  let playlist=Slowdive
  let artistName= "Phil Ochs"
  delete Slowdive["Phil Ochs"];
  return Slowdive;
}
