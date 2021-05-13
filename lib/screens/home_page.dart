
import 'package:artifacts_ios/screens/qr_scanner.dart';
import 'package:artifacts_ios/widgets/my_button.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'ARtifacts - AR Companion',
          style: TextStyle(
            fontSize: 20,
            color: Colors.white,
          ),
        ),
        backgroundColor: Colors.blueGrey[800],
      ),
      body: Column(
        children: [
          Row(
            children: [
              Container(
                //color: Colors.redAccent,
                padding: EdgeInsets.symmetric(
                  vertical: 30,
                  horizontal: 30,
                ),
                width: MediaQuery.of(context).size.width / 2,
                height: MediaQuery.of(context).size.width / 1.8,
                child: GridTile(
                  header: Center(
                    child: Text(
                      'Step 1',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(30.0),
                    child: Image.asset(
                      'assets/stepone.png',
                      fit: BoxFit.contain,
                    ),
                  ),
                  footer: Container(
                    width: MediaQuery.of(context).size.width / 2.5,
                    child: Center(
                      child: Text('Find a product on the website.'),
                    ),
                  ),
                ),
              ),
              Container(
                //color: Colors.redAccent,
                padding: EdgeInsets.symmetric(
                  vertical: 30,
                  horizontal: 30,
                ),
                width: MediaQuery.of(context).size.width / 2,
                height: MediaQuery.of(context).size.width / 1.8,
                child: GridTile(
                  header: Center(
                    child: Text(
                      'Step 2',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(40.0),
                    child: Image.asset(
                      'assets/steptwo.png',
                      fit: BoxFit.contain,
                    ),
                  ),
                  footer: Container(
                    width: MediaQuery.of(context).size.width / 2.5,
                    child: Center(
                      child: Text('Click on View in AR.'),
                    ),
                  ),
                ),
              ),
            ],
          ),
          Row(
            children: [
              Container(
                //color: Colors.redAccent,
                padding: EdgeInsets.symmetric(
                  vertical: 30,
                  horizontal: 30,
                ),
                width: MediaQuery.of(context).size.width / 2,
                height: MediaQuery.of(context).size.width / 1.8,
                child: GridTile(
                  header: Center(
                    child: Text(
                      'Step 3',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(30.0),
                    child: Image.asset(
                      'assets/stepthree.png',
                      fit: BoxFit.contain,
                    ),
                  ),
                  footer: Container(
                    width: MediaQuery.of(context).size.width / 2.5,
                    child: Center(
                      child: Text('Scan the QR by pressing the button below.'),
                    ),
                  ),
                ),
              ),
              Container(
                //color: Colors.redAccent,
                padding: EdgeInsets.symmetric(
                  vertical: 30,
                  horizontal: 30,
                ),
                width: MediaQuery.of(context).size.width / 2,
                height: MediaQuery.of(context).size.width / 1.8,
                child: GridTile(
                  header: Center(
                    child: Text(
                      'Step 4',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  child: Container(
                    padding: const EdgeInsets.all(35.0),
                    child: Image.asset(
                      'assets/stepfour.png',
                      fit: BoxFit.contain,
                    ),
                  ),
                  footer: Container(
                    width: MediaQuery.of(context).size.width / 2.5,
                    child: Center(
                      child: Text('Click on "View in AR" Button in the app.'),
                    ),
                  ),
                ),
              ),
            ],
          ),
          SizedBox(
            height: 20,
          ),
          Center(
            child: MyButton(
              name: ' Scan QR Code',
              icon: Icons.qr_code_scanner,
              onPressed: () {
                Navigator.of(context)
                    .pushReplacement(MaterialPageRoute(builder: (context) {
                  return QrCodeScannerPage();
                }));
              },
            ),
          ),
        ],
      ),
    );
  }
}
