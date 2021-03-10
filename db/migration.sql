CREATE TABLE bins (
  slug varchar(255) PRIMARY KEY, 
  requests JSONB DEFAULT '{}'::jsonb
);

INSERT INTO bins VALUES ('acms1234', '{
	"timestamp": "2021-10-03 9:39:30",
	"method": "POST",
	"queryParams": {
		"amount": "400",
		"length": "60",
		"width": "30"
	},
	"headers": {
		"header1": "value1",
		"header2": "value2"
	},
	"body": {
		"Hi": "I am json"
	}
}');