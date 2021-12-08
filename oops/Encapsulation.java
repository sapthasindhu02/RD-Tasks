//Album.java

public class Album {
    private String name;
    private String artist;
   public String getName() {
      return name;
   }
   public void setName(String name) {
      this.name = name;
   }
   public String getArtist() {
      return artist;
   }
   public void setArtist(String artist) {
      this.artist = artist;
   }
 
}

//AlbumStockManager.java

public class AlbumStockManager {
    private String name;
    AlbumStockManager(String name){
        setName(name);
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public void manageAlbum(Album album, String name, String artist){
        album.setName(name);
        album.setArtist(artist);
        System.out.println("Album managed by :"+ getName());
        System.out.println("Album name : " + album.getName());
        System.out.println("Album artist : " + album.getArtist());
    }
}

public class Encapsulation{
    public static void main(String[] args) {
       AlbumStockManager mark= new AlbumStockManager("Mark");
       mark.manageAlbum(new Album(), "ALbum name", "Author name");
    }
}