using Microsoft.EntityFrameworkCore.Migrations;

namespace FlatAgency.Migrations
{
    public partial class Seeding : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Owners (Name,Surname,Number) VALUES ('Igor','Kolodziejczyk','123456789')");
            migrationBuilder.Sql("INSERT INTO Owners (Name,Surname,Number) VALUES ('Agnieszka','Kolodziejczyk','987654321')");
            migrationBuilder.Sql("INSERT INTO Owners (Name,Surname,Number) VALUES ('Kuba','Potocki','951753258')");

            migrationBuilder.Sql("INSERT INTO Addresses (Street,City) VALUES ('Suwalska','Warszawa')");
            migrationBuilder.Sql("INSERT INTO Addresses (Street,City) VALUES ('Połosa','Warszawa')");
            migrationBuilder.Sql("INSERT INTO Addresses (Street,City) VALUES ('Sympatyczna','Lublin')");

            migrationBuilder.Sql("INSERT INTO Properties (Type,Description,Rooms,Area,Washer,Refrigerator,Iron,AddressId,OwnerId) VALUES (0,'Opis 1',5,170,1,1,1,1,1)");
            migrationBuilder.Sql("INSERT INTO Properties (Type,Description,Rooms,Area,Washer,Refrigerator,Iron,AddressId,OwnerId) VALUES (1,'Opis 2',2,45,0,1,0,2,2)");
            migrationBuilder.Sql("INSERT INTO Properties (Type,Description,Rooms,Area,Washer,Refrigerator,Iron,AddressId,OwnerId) VALUES (1,'Opis 3',3,60,1,1,1,3,3)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Properties");
            migrationBuilder.Sql("DELETE FROM Addresses");
            migrationBuilder.Sql("DELETE FROM Owners");
        }
    }
}
