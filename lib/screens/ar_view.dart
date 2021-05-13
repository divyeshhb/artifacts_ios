// import 'dart:math' as math;
import 'package:arkit_plugin/arkit_plugin.dart';
import 'package:flutter/material.dart';
import 'package:vector_math/vector_math_64.dart' as vector;

class ManipulationPage extends StatefulWidget {
  final String modelName;
  final String nameItem;
  ManipulationPage({this.modelName, this.nameItem});
  @override
  _ManipulationPageState createState() => _ManipulationPageState();
}

class _ManipulationPageState extends State<ManipulationPage> {
  ARKitController arkitController;
  List<ARKitReferenceNode> nodes = [];

  @override
  void dispose() {
    arkitController?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(
          title: Text(
            '${widget.nameItem}',
            style: TextStyle(
              fontSize: 20,
              color: Colors.white,
            ),
          ),
          backgroundColor: Colors.blueGrey[800],
        ),
        body: Container(
          child: ARKitSceneView(
            showFeaturePoints: true,
            enableTapRecognizer: true,
            enablePinchRecognizer: true,
            enablePanRecognizer: true,
            planeDetection: ARPlaneDetection.horizontal,
            onARKitViewCreated: onARKitViewCreated,
          ),
        ),
      );

  void onARKitViewCreated(ARKitController arkitController) {
    this.arkitController = arkitController;
    this.arkitController.onARTap = (ar) {
      final point =
          ar.firstWhere((o) => o.type == ARKitHitTestResultType.featurePoint);
      if (point != null) {
        _onTapHandler(point);
      }
    };
    this.arkitController.onNodePinch = (pinch) => _onPinchHandler(pinch);
    //  this.arkitController.onNodePan = (pan) => _onPanHandler(pan);
  }

  void _onTapHandler(ARKitTestResult point) {
    final position = vector.Vector3(
      point.worldTransform.getColumn(3).x,
      point.worldTransform.getColumn(3).y,
      point.worldTransform.getColumn(3).z,
    );
    final node = ARKitReferenceNode(
      url: 'models.scnassets/${widget.modelName}',
      scale: vector.Vector3.all(0.2),
      eulerAngles: vector.Vector3.zero(),
      position: position,
    );
    if (nodes.isNotEmpty) {
      arkitController.remove(nodes[0].name);
      nodes.remove(nodes[0]);
    }
    arkitController.add(node);
    nodes.add(node);
  }

  void _onPinchHandler(List<ARKitNodePinchResult> pinch) {
    for (var pinchNode in pinch) {
      // final node = nodes.firstWhere((n) => n.name == pinchNode.nodeName);
      final node = nodes[0];
      if (node != null) {
        final scale = vector.Vector3.all(
          pinchNode.scale,
        );
        node.scale = scale / 2;
      }
    }
  }
}
