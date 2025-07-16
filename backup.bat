chcp 65001

SET PGPASSWORD=111111
SET db_name=vagper
SET port_number=5432

SET host_name=172.16.220.25
SET user_name=postgres

SET host_name2=127.0.0.1
SET user_name2=postgres

SET pg_dump_path="e:\postgre\bin\pg_dump.exe"  
SET cmd_path="e:\postgre\bin\psql"  
SET pg_restore_path="e:\postgre\bin\pg_restore"  
SET dropdb_path="e:\postgre\bin\dropdb"  
SET createb_path="e:\postgre\bin\createdb"  
SET target_backup_path=e:\vagper\tmp\

for /f "tokens=1-3 delims=- " %%i in ("%date%") do (
	set month=%%j
	set day=%%i
	set year=%%k
)
for /f "tokens=1-3 delims=: " %%i in ("%time%") do (
	set hour=%%i
	set min=%%j
	set sec=%%k
)

for /f "delims=" %%i in ('dir "%target_backup_path%" /b/a-d ^| find /v /c "::"') do set count=%%i
set /a count=%count%+1 
set datestr=%year%_%month%_%day%_%hour%_%min%

set BACKUP_FILE=%db_name%_%datestr%.backup

%pg_dump_path% --host=%host_name% -U %user_name% -f %target_backup_path%%BACKUP_FILE%  %db_name% 

%dropdb_path% --host=%host_name2% -p %port_number% -U %user_name2% %db_name% 

%createb_path% --host=%host_name2% -p %port_number% -U %user_name2% %db_name% 

%cmd_path% --host=%host_name2% -U %user_name2% %db_name% < %target_backup_path%%BACKUP_FILE%  
