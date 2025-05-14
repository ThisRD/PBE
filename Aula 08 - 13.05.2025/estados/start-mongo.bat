if not exist ".\estado-db" (
    mkdir ".\estado-db"
)

"C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --dbpath .\estado-db
