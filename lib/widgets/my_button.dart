import 'package:flutter/material.dart';

class MyButton extends StatefulWidget {
  final String name;
  final IconData icon;
  final Function onPressed;

  MyButton({
    this.name,
    this.icon,
    this.onPressed,
  });

  @override
  _MyButtonState createState() => _MyButtonState();
}

class _MyButtonState extends State<MyButton> {
  @override
  Widget build(BuildContext context) {
    return MaterialButton(
      color: Colors.black87,
      hoverColor: Colors.black,
      highlightColor: Colors.blueGrey[800],
      onPressed: widget.onPressed,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(5),
      ),
      child: Container(
        height: 50,
        width: 375,
        padding: EdgeInsets.only(
          top: 8.0,
          bottom: 8.0,
        ),
        child: Center(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Icon(
                widget.icon,
                color: Colors.white,
              ),
              Text(
                widget.name,
                style: TextStyle(
                  fontFamily: 'Montserrat',
                  fontSize: 14,
                  color: Colors.white,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
