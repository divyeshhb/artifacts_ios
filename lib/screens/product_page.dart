import 'package:artifacts_ios/screens/ar_view.dart';
import 'package:artifacts_ios/screens/qr_scanner.dart';

// import '../custom_view.dart';
import '../widgets/my_button.dart';
import '../widgets/time_formatter.dart';
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:intl/intl.dart';

class ProductPage extends StatefulWidget {
  final String productId;
  // final String status;
  // final int index;
  // final dynamic snap;
  ProductPage(
    this.productId,
  );

  @override
  _ProductPageState createState() => _ProductPageState();
}

class _ProductPageState extends State<ProductPage> {
  //var arUrl;
  @override
  void initState() {
    // getTimeStatus();
    //arUrl = await createDynamicLink(widget.productId);
    super.initState();
  }

  final currencyFormat = NumberFormat("#,##0.00", "en_US");
  var differenceS;
  var differenceE;
  String status;
  getTimeStatus(var snap) {
    Timestamp s = snap.data['startDate'];
    Timestamp e = snap.data['endDate'];
    differenceS = s.toDate().difference(DateTime.now()).inSeconds;
    differenceE = e.toDate().difference(DateTime.now()).inSeconds;
    if (s.toDate().isAfter(DateTime.now())) {
      status = 'will_start';
    } else if (s.toDate().isBefore(DateTime.now()) &&
        e.toDate().isAfter(DateTime.now())) {
      status = 'in_progress';
    } else if (e.toDate().isBefore(DateTime.now())) {
      status = 'ended';
    }
  }

  @override
  Widget build(BuildContext context) {
    // var screenSize = MediaQuery.of(context).size;

    return Scaffold(
      // backgroundColor: Theme.of(context).backgroundColor,
      extendBodyBehindAppBar: false,
      appBar: AppBar(
        leading: BackButton(
          onPressed: () {
            Navigator.of(context)
                .pushReplacement(MaterialPageRoute(builder: (context) {
              return QrCodeScannerPage();
            }));
          },
        ),
        title: Text(
          'ARtifacts',
          style: TextStyle(
            fontSize: 20,
            color: Colors.white,
          ),
        ),
        backgroundColor: Colors.blueGrey[800],
      ),
      body: StreamBuilder(
          stream: FirebaseFirestore.instance
              .collection('Product')
              .doc(widget.productId)
              .snapshots(),
          builder: (context, snapshot) {
            if (!snapshot.hasData) {
              return Center(
                child: CircularProgressIndicator(),
              );
            }
            getTimeStatus(snapshot);
            if (status.isEmpty) {
              return Center(
                child: CircularProgressIndicator(),
              );
            }
            //var productDoc = snapshot.data;
            return Container(
              color: Color(0xFFf0f0f0),
              child: Padding(
                padding: const EdgeInsets.all(20.0),
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Container(
                    decoration: BoxDecoration(
                        color: Color(0xFFfbfbfb),
                        borderRadius: BorderRadius.circular(20)),
                    child: Padding(
                      padding: const EdgeInsets.all(18.0),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: <Widget>[
                          // Expanded(flex: 1, child: appBar()),
                          Expanded(
                            flex: 5,
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(10),
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Container(
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(10),
                                    image: DecorationImage(
                                      image: NetworkImage(
                                          snapshot.data['productImageUrl']),
                                      fit: BoxFit.cover,
                                    ),
                                    boxShadow: [
                                      BoxShadow(
                                        color: Colors.grey,
                                        //offset: Offset(0.0, 1.0), //(x,y)
                                        blurRadius: 5.0,
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                              flex: 5,
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: <Widget>[
                                  SizedBox(
                                    height: 25,
                                  ),
                                  Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: <Widget>[
                                      Padding(
                                        padding: const EdgeInsets.only(
                                          left: 30.0,
                                          right: 30,
                                          // top: 25.0,
                                          bottom: 5,
                                        ),
                                        child: Text(
                                          snapshot.data['productName'],
                                          style: TextStyle(
                                            fontSize: 34,
                                            color: Color(0xFF333333),
                                            fontFamily: "Montserrat",
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                      ),
                                      Container(
                                        height: 40,
                                        padding: EdgeInsets.only(
                                          left: 30.0,
                                          bottom: 15,
                                        ),
                                        child: ListView.builder(
                                            scrollDirection: Axis.horizontal,
                                            shrinkWrap: true,
                                            itemCount:
                                                snapshot.data['tags'].length,
                                            itemBuilder: (context, index) {
                                              return Padding(
                                                padding: const EdgeInsets.only(
                                                    right: 8.0),
                                                child: MaterialButton(
                                                  onPressed: () {},
                                                  color: Colors.blueGrey,
                                                  hoverColor:
                                                      Colors.blueGrey[700],
                                                  highlightColor:
                                                      Colors.blueGrey[800],
                                                  shape: RoundedRectangleBorder(
                                                    borderRadius:
                                                        BorderRadius.circular(
                                                            15),
                                                  ),
                                                  child: Container(
                                                    child: Center(
                                                      child: Text(
                                                        '# ${snapshot.data['tags'][index]}',
                                                        style: TextStyle(
                                                          fontFamily:
                                                              'Montserrat',
                                                          fontSize: 12,
                                                          color: Colors.white,
                                                        ),
                                                      ),
                                                    ),
                                                  ),
                                                ),
                                              );
                                            }),
                                      ),
                                      Padding(
                                        padding: const EdgeInsets.only(
                                          left: 30.0,
                                          right: 30,
                                          top: 0,
                                          bottom: 15,
                                        ),
                                        child: Text(
                                          'INR ${currencyFormat.format(double.parse((snapshot.data["basePrice"])))}',
                                          style: TextStyle(
                                            fontSize: 24,
                                            color: Color(0xFF333333),
                                            fontFamily: "Montserrat",
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                      ),
                                      Container(
                                        width: 700,
                                        padding: const EdgeInsets.only(
                                            left: 30.0, top: 0),
                                        child: Container(
                                          child: Text(
                                            '${snapshot.data['shortDesc']} \n\nDetails-\n${snapshot.data['longDesc']}',
                                            style: TextStyle(
                                              fontSize: 15,
                                              color: Color(0xFF333333),
                                              fontFamily: "Montserrat",
                                              // fontWeight: FontWeight.w500,
                                            ),
                                            maxLines: 6,
                                            overflow: TextOverflow.ellipsis,
                                          ),
                                        ),
                                      ),
                                      // SizedBox(
                                      //   height: 30,
                                      // ),
                                    ],
                                  ),
                                  Container(
                                    padding: EdgeInsets.only(
                                      top: 25,
                                      left: 30,
                                      right: 30,
                                    ),
                                    child: Row(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceBetween,
                                      children: <Widget>[
                                        Column(
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: <Widget>[
                                            Text(
                                              status == "will_start"
                                                  ? 'Current Bid'
                                                  : status == 'in_progress'
                                                      ? 'Current Bid'
                                                      : 'Sold for',
                                              style: TextStyle(
                                                fontSize: 15,
                                                fontFamily: 'Montserrat',
                                                // fontWeight: FontWeight.bold,
                                                // color: Colors.white60,
                                              ),
                                            ),
                                            Text(
                                              status == "will_start"
                                                  ? 'Starting Soon'
                                                  : status == 'in_progress'
                                                      ? 'INR ${currencyFormat.format(double.parse((snapshot.data["currentBid"])))}'
                                                      //: 'INR ${currencyFormat.format(double.parse((widget.snapshot.data.docs[widget.index]["finalPrice"])))}',
                                                      : 'INR 20,000.00',
                                              style: TextStyle(
                                                fontSize: 18,
                                                fontFamily: 'Montserrat',
                                                fontWeight: FontWeight.bold,
                                                // color: Colors.white,
                                              ),
                                            ),
                                          ],
                                        ),
                                        Column(
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: <Widget>[
                                            Text(
                                              status == "will_start"
                                                  ? 'Starts in'
                                                  : status == 'in_progress'
                                                      ? 'Ends in'
                                                      : 'Ended',
                                              style: TextStyle(
                                                fontSize: 15,
                                                fontFamily: 'Montserrat',
                                                // fontWeight: FontWeight.bold,
                                                // color: Colors.white60,
                                              ),
                                            ),
                                            status == 'ended'
                                                ? Text(
                                                    '-',
                                                    style: TextStyle(
                                                      fontSize: 18,
                                                      fontFamily: 'Montserrat',
                                                      fontWeight:
                                                          FontWeight.bold,
                                                      // color: Colors.white,
                                                    ),
                                                  )
                                                : CountDownTimer(
                                                    secondsRemaining: status ==
                                                            'will_start'
                                                        ? differenceS
                                                        : status ==
                                                                'in_progress'
                                                            ? differenceE
                                                            : 0,
                                                    whenTimeExpires: () {},
                                                    countDownTimerStyle:
                                                        TextStyle(
                                                      fontSize: 18,
                                                      fontFamily: 'Montserrat',
                                                      fontWeight:
                                                          FontWeight.bold,
                                                      // color: Colors.white,
                                                    ),
                                                  ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ),
                                  SizedBox(
                                    height: 50,
                                  ),
                                  MyButton(
                                    name: ' View in AR',
                                    icon: Icons.play_circle_outline_outlined,
                                    onPressed: () {
                                      Navigator.of(context).push(
                                          MaterialPageRoute(builder: (context) {
                                        return ManipulationPage(
                                          modelName:
                                              snapshot.data["arFileName"],
                                          nameItem:
                                              snapshot.data['productName'],
                                        );
                                      }));
                                    },
                                  ),
                                ],
                              ))
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            );
          }),
    );
  }
}
